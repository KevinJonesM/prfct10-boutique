import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { readProductionBank, readSourceBank } from "../scripts/lib/code10-source-bank.mjs";
import { auditCode10Localization } from "../scripts/audit-code10-localization.mjs";
import { localizeQuestion } from "../src/data/code10/localize.js";
import { configLabels, localizedEyebrow, hasSpanishQuestion } from "../src/components/Code10/presentation.js";
import { questionText, getCode10Score } from "../src/components/Code10/engine.js";
import { createCode10ShareSvg } from "../src/components/Code10/shareCard.js";
import { code10En, code10Es } from "../src/i18n/code10.js";
const production = await readProductionBank();
const sources = await readSourceBank();
const translate = dictionary => key => key.replace(/^code10\./,"").split(".").reduce((value,part)=>value?.[part],dictionary) ?? key;

test("all 265 verified production questions have explicit EN/ES fields and distinct Spanish options", async()=>{
  const audit = await auditCode10Localization();
  assert.equal(audit.productionVerified,265);
  assert.equal(audit.completeEnglish,265); assert.equal(audit.completeSpanish,265);
  for (const rows of Object.values(audit.missing)) assert.deepEqual(rows,[]);
  assert.deepEqual(audit.invalidCorrectIds,[]); assert.deepEqual(audit.duplicateSpanishOptions,[]);
  assert.equal(audit.keyParity,true); assert.deepEqual(audit.missingKeys,[]);
  assert.deepEqual(audit.unexpectedRawEnglish,[]);
});

test("linguistic hydration preserves every owner-supplied field, option ID, fact and verification value",()=>{
  for (const raw of sources) {
    const result = production.find(q=>q.id===raw.id);
    assert.ok(result,raw.id);
    for (const [key,value] of Object.entries(raw)) {
      if (key === "options") {
        raw.options.forEach((option,i)=>{
          for (const [field,text] of Object.entries(option)) assert.deepEqual(result.options[i][field],text,raw.id+":"+field);
          assert.equal(result.options[i].text_en,option.text);
        });
      } else assert.deepEqual(result[key],value,raw.id+":"+key);
    }
    for (const field of ["question","explanation","takeaway"]) assert.equal(result[field+"_en"],raw[field]);
    assert.equal(result.options.find(o=>o.id===raw.correctOptionId)?.id,raw.correctOptionId);
  }
});

test("numeric answer values and their option order do not change in Spanish",()=>{
  const numbers = text => text.match(/\d+(?:[.:]\d+)*|[¼½¾]/g) || [];
  for (const q of production) for (const option of q.options) assert.deepEqual(numbers(option.text_es),numbers(option.text_en),q.id+":"+option.id);
});

test("every question format localizes and fallback remains honest for a future untranslated batch",()=>{
  const es = translate(code10Es);
  for (const q of production) {
    assert.ok(hasSpanishQuestion(q));
    assert.ok(!localizedEyebrow(q,es,"es").startsWith("code10."));
    assert.equal(questionText(q,"question","es"),q.question_es);
  }
  const future = {...sources[0],id:"future-untranslated"};
  const before = structuredClone(future);
  const localized = localizeQuestion(future);
  assert.deepEqual(future,before);
  assert.equal(hasSpanishQuestion(localized),false);
  assert.equal(questionText(localized,"question","es"),future.question);
});

test("Story and Feed use selected-locale labels for all eleven scores without raw config identifiers",()=>{
  for (const dictionary of [code10En,code10Es]) for (const format of ["story","feed"]) for (let rawScore=0;rawScore<=10;rawScore++) {
    const t=translate(dictionary),score=getCode10Score(rawScore);
    const labels=configLabels({program:"XCEL",division:"SAPPHIRE",category:"COMPETITION_SMART"},t);
    const svg=createCode10ShareSvg({rawScore,format,...labels,label:t("code10.labels."+score.labelKey),challengeLine:t("code10.challengeLine")});
    assert.ok(svg.includes(labels.categoryLabel));
    assert.ok(svg.includes(t("code10.challengeLine")));
    assert.ok(svg.includes(t("code10.labels."+score.labelKey)));
    assert.ok(!svg.includes("COMPETITION_SMART"));
    assert.ok(svg.includes('width="1080" height="'+(format==="story"?1920:1350)+'"'));
    assert.ok(svg.includes(score.formattedScore));
  }
});

test("semantic choice tones preserve selected hover, focus and unavailable program behavior",async()=>{
  const css=await readFile(new URL("../src/components/Code10/Code10.css",import.meta.url),"utf8");
  const jsx=await readFile(new URL("../src/components/Code10/Code10Builder.jsx",import.meta.url),"utf8");
  for (const [tone,color] of [["program","blue"],["division","acid"],["category","pink"]]) assert.ok(css.includes(`.c10-field--${tone} { --c10-choice-selected:var(--c10-${color})`));
  assert.ok(css.includes('button[aria-checked=true]:hover')); assert.ok(css.includes(':focus-visible'));
  assert.ok(jsx.includes('disabled={["COMPULSORY","OPTIONAL"]}'));
  assert.ok(jsx.includes('program === "COMPULSORY" ? "code10.level"'));
});
