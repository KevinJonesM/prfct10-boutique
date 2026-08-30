import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { stripTypeScriptTypes } from "node:module";
import { DIVISIONS, CATEGORIES } from "../src/components/Code10/config.js";
import { isUsableQuestion, questionApparatus, selectVerifiedChallenge } from "../src/components/Code10/engine.js";

// Follow the actual production registry, including its extensionless TS imports.
// No fixture or duplicated test-only aggregation can hide a missing registration.
async function moduleUrl(url) {
  let source = stripTypeScriptTypes(await readFile(url,"utf8"));
  const imports = [...source.matchAll(/from\s+["'](\.[^"']+)["']/g)];
  for (const match of imports) {
    const dependency = new URL(match[1]+".ts",url);
    source = source.replace(match[0], 'from "'+await moduleUrl(dependency)+'"');
  }
  return "data:text/javascript;base64,"+Buffer.from(source).toString("base64");
}
const { xcelQuestionBank: bank } = await import(await moduleUrl(new URL("../src/data/code10/xcel/index.ts",import.meta.url)));
const batches = [
  { prefix: /^(xcel-art|xcel-gen)-/, count: 40 },
  { prefix: /^xcel-trap-/, count: 40 },
  { prefix: /^xcel-call-/, count: 40 },
];
const available = ["MIX","VAULT","BARS","BEAM","FLOOR","MYTH_OR_RULE","WHATS_THE_CALL"];

test("production registry includes all 265 unique records and the three complete new batches",()=>{
  assert.equal(bank.length,265);
  assert.equal(new Set(bank.map(q=>q.id)).size,265);
  for (const q of bank) assert.ok(isUsableQuestion(q),q.id);
  for (const {prefix,count} of batches) {
    const questions=bank.filter(q=>prefix.test(q.id));
    assert.equal(questions.length,count);
    assert.deepEqual(questions.map(q=>Number(q.id.slice(-3))),Array.from({length:40},(_,i)=>i+1));
    for(const q of questions) {
      assert.equal(q.verification.status,"VERIFIED");
      assert.equal(q.verification.verifiedOn,"2026-08-30");
      assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle,q.id);
      assert.ok(q.divisions.length && q.divisions.every(d=>DIVISIONS.includes(d)),q.id);
    }
  }
});

test("all available category/division combinations produce unique eligible 5/3/2 challenges",()=>{
  const before=JSON.stringify(bank);
  for(const division of DIVISIONS) for(const category of available) for(let run=0;run<10;run++) {
    const result=selectVerifiedChallenge(bank,{program:"XCEL",division,category});
    assert.equal(result.ok,true,division+" "+category);
    assert.equal(result.questions.length,10);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    for(const q of result.questions) {
      assert.equal(q.verification.status,"VERIFIED");
      assert.ok(q.divisions.includes(division),q.id);
      if(["VAULT","BARS","BEAM","FLOOR"].includes(category)) assert.ok(questionApparatus(q).includes(category),q.id);
      if(["MYTH_OR_RULE","WHATS_THE_CALL"].includes(category)) assert.equal(q.category,category);
    }
    for(const [tier,count] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,count);
    }
  }
  assert.equal(JSON.stringify(bank),before);
});

test("sparse Artistry and non-Sapphire Competition Smart stay controlled",()=>{
  for(const division of DIVISIONS) for(const category of ["ARTISTRY","COMPETITION_SMART"]) {
    if (division === "SAPPHIRE" && category === "COMPETITION_SMART") continue;
    const result=selectVerifiedChallenge(bank,{program:"XCEL",division,category});
    assert.equal(result.ok,false);
    assert.ok(["INSUFFICIENT_CONTENT","INSUFFICIENT_VARIETY"].includes(result.reason));
  }
});

test("owner-designated Competition Smart section supports Sapphire without rewriting Batch 06",()=>{
  const before = JSON.stringify(bank);
  for (let run = 0; run < 40; run++) {
    const result = selectVerifiedChallenge(bank,{program:"XCEL",division:"SAPPHIRE",category:"COMPETITION_SMART"});
    assert.equal(result.ok,true);
    assert.equal(result.questions.length,10);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    for (const question of result.questions) {
      assert.match(question.id,/^xcel-gen-/);
      assert.equal(question.verification.status,"VERIFIED");
      assert.ok(question.divisions.includes("SAPPHIRE"));
      assert.ok(["GENERAL","COMPETITION_RULES","TIMING"].includes(question.category));
    }
    for (const [tier,count] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,count);
    }
  }
  assert.equal(JSON.stringify(bank),before);
});

test("new batches never enter production after verification is withdrawn",()=>{
  const newRecord=q=>batches.some(({prefix})=>prefix.test(q.id));
  for(const status of ["DEV_ONLY","REVIEW_NEEDED","RETIRED"]) {
    const restricted=bank.map(q=>newRecord(q)?{...q,verification:{...q.verification,status}}:q);
    for(const division of DIVISIONS) for(const category of CATEGORIES) {
      const result=selectVerifiedChallenge(restricted,{program:"XCEL",division,category});
      if(result.ok) assert.ok(result.questions.every(q=>!newRecord(q) && q.verification.status==="VERIFIED"));
      if(["MYTH_OR_RULE","WHATS_THE_CALL","COMPETITION_SMART"].includes(category)) assert.equal(result.ok,false);
    }
  }
});
