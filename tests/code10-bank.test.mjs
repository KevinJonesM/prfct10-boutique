import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { stripTypeScriptTypes } from "node:module";
import { isUsableQuestion, questionApparatus, selectVerifiedChallenge } from "../src/components/Code10/engine.js";
import { DIVISIONS } from "../src/components/Code10/config.js";

const source = await readFile(new URL("../src/data/code10/xcel/core-batch01.ts",import.meta.url),"utf8");
const { xcelCoreBatch01: batch } = await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(source)).toString("base64"));
const vaultSource = await readFile(new URL("../src/data/code10/xcel/vault-batch02.ts",import.meta.url),"utf8");
const { xcelVaultBatch02: vaultBatch } = await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(vaultSource)).toString("base64"));
const combined = [...batch, ...vaultBatch];
const barsSource = await readFile(new URL("../src/data/code10/xcel/bars-batch03.ts",import.meta.url),"utf8");
const { xcelBarsBatch03: barsBatch } = await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(barsSource)).toString("base64"));
const fullBank = [...combined, ...barsBatch];
const beamSource = await readFile(new URL("../src/data/code10/xcel/beam-batch04.ts",import.meta.url),"utf8");
const { xcelBeamBatch04: beamBatch } = await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(beamSource)).toString("base64"));
const fourBatchBank = [...fullBank, ...beamBatch];
const floorSource = await readFile(new URL("../src/data/code10/xcel/floor-batch05.ts",import.meta.url),"utf8");
const { xcelFloorBatch05: floorBatch } = await import("data:text/javascript;base64,"+Buffer.from(stripTypeScriptTypes(floorSource)).toString("base64"));
const fiveBatchBank = [...fourBatchBank, ...floorBatch];

test("owner Floor Batch 05 adds 40 valid records with unique IDs and source metadata",()=>{
  assert.equal(floorBatch.length,40);
  assert.equal(fiveBatchBank.length,145);
  assert.equal(new Set(fiveBatchBank.map(q=>q.id)).size,145);
  for(const [i,q] of floorBatch.entries()) {
    assert.equal(q.id,"xcel-fx-"+String(i+1).padStart(3,"0"));
    assert.ok(isUsableQuestion(q),q.id);
    assert.deepEqual(q.apparatus,["FX"]);
    assert.equal(q.verification.status,"VERIFIED");
    assert.equal(q.verification.verifiedOn,"2026-08-30");
    assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle);
  }
});

test("Floor supports all six divisions with exact quotas and preserves the source bank",()=>{
  const before=JSON.stringify(fiveBatchBank);
  for(const division of DIVISIONS) for(let run=0;run<20;run++) {
    const result=selectVerifiedChallenge(fiveBatchBank,{program:"XCEL",division,category:"FLOOR"});
    assert.equal(result.ok,true,division);
    assert.equal(result.questions.length,10);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    assert.ok(result.questions.every(q=>q.divisions.includes(division) && questionApparatus(q).includes("FLOOR") && q.verification.status==="VERIFIED"));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
  }
  assert.equal(JSON.stringify(fiveBatchBank),before);
});

test("five batches retain previous availability and never use unverified Floor content",()=>{
  for(const division of DIVISIONS) {
    for(const category of ["MIX","BEAM"]) {
      const result=selectVerifiedChallenge(fiveBatchBank,{program:"XCEL",division,category});
      assert.equal(result.ok,true);
      assert.ok(result.questions.every(q=>q.divisions.includes(division)));
      for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
        assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
      }
    }
    assert.equal(selectVerifiedChallenge(fiveBatchBank,{program:"XCEL",division,category:"VAULT"}).ok,division==="SILVER");
    assert.equal(selectVerifiedChallenge(fiveBatchBank,{program:"XCEL",division,category:"BARS"}).ok,["PLATINUM","DIAMOND","SAPPHIRE"].includes(division));
  }
  for(const status of ["DEV_ONLY","REVIEW_NEEDED","RETIRED"]) {
    const restricted=[...fourBatchBank,...floorBatch.map(q=>({...q,verification:{status}}))];
    for(const division of DIVISIONS) {
      assert.equal(selectVerifiedChallenge(restricted,{program:"XCEL",division,category:"FLOOR"}).ok,false);
    }
  }
});

test("owner Beam Batch 04 adds 30 valid verified records without ID collisions",()=>{
  assert.equal(beamBatch.length,30);
  assert.equal(fourBatchBank.length,105);
  assert.equal(new Set(fourBatchBank.map(q=>q.id)).size,105);
  for(const [i,q] of beamBatch.entries()) {
    assert.equal(q.id,"xcel-bb-"+String(i+1).padStart(3,"0"));
    assert.ok(isUsableQuestion(q));
    assert.deepEqual(q.apparatus,["BB"]);
    assert.equal(q.verification.status,"VERIFIED");
    assert.equal(q.verification.verifiedOn,"2026-08-30");
    assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle);
  }
});

test("Beam supports all six divisions with exact quotas and no cross-division leakage",()=>{
  const before=JSON.stringify(fourBatchBank);
  for(const division of DIVISIONS) for(let run=0;run<20;run++) {
    const result=selectVerifiedChallenge(fourBatchBank,{program:"XCEL",division,category:"BEAM"});
    assert.equal(result.ok,true);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    assert.ok(result.questions.every(q=>q.divisions.includes(division) && questionApparatus(q).includes("BEAM") && q.verification.status==="VERIFIED"));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
  }
  assert.equal(JSON.stringify(fourBatchBank),before);
});

test("four batches preserve existing availability and exclude unverified Beam records",()=>{
  for(const division of DIVISIONS) {
    const result=selectVerifiedChallenge(fourBatchBank,{program:"XCEL",division,category:"MIX"});
    assert.equal(result.ok,true);
    assert.ok(result.questions.every(q=>q.divisions.includes(division)));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
    assert.equal(selectVerifiedChallenge(fourBatchBank,{program:"XCEL",division,category:"VAULT"}).ok,division==="SILVER");
    assert.equal(selectVerifiedChallenge(fourBatchBank,{program:"XCEL",division,category:"BARS"}).ok,["PLATINUM","DIAMOND","SAPPHIRE"].includes(division));
  }
  for(const status of ["DEV_ONLY","REVIEW_NEEDED","RETIRED"]) {
    const restricted=[...fullBank,...beamBatch.map(q=>({...q,verification:{status}}))];
    for(const division of DIVISIONS) {
      assert.equal(selectVerifiedChallenge(restricted,{program:"XCEL",division,category:"BEAM"}).ok,false);
    }
  }
});

test("owner Bars Batch 03 adds 30 valid verified records with no ID collisions",()=>{
  assert.equal(barsBatch.length,30);
  assert.equal(fullBank.length,75);
  assert.equal(new Set(fullBank.map(q=>q.id)).size,75);
  for(const [i,q] of barsBatch.entries()) {
    assert.equal(q.id,"xcel-ub-"+String(i+1).padStart(3,"0"));
    assert.ok(isUsableQuestion(q));
    assert.deepEqual(q.apparatus,["UB"]);
    assert.equal(q.verification.status,"VERIFIED");
    assert.equal(q.verification.verifiedOn,"2026-08-30");
    assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle);
  }
});

test("Bars opens only for Platinum, Diamond and Sapphire with exact quotas and division eligibility",()=>{
  const before=JSON.stringify(fullBank);
  for(const division of DIVISIONS) for(let run=0;run<20;run++) {
    const result=selectVerifiedChallenge(fullBank,{program:"XCEL",division,category:"BARS"});
    if(!["PLATINUM","DIAMOND","SAPPHIRE"].includes(division)) {
      assert.equal(result.ok,false);
      assert.equal(result.reason,"INSUFFICIENT_VARIETY");
      continue;
    }
    assert.equal(result.ok,true);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    assert.ok(result.questions.every(q=>q.divisions.includes(division) && questionApparatus(q).includes("BARS") && q.verification.status==="VERIFIED"));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
  }
  assert.equal(JSON.stringify(fullBank),before);
});

test("three-batch registry retains MIX and Silver Vault availability without non-verified fallback",()=>{
  for(const division of DIVISIONS) {
    const result=selectVerifiedChallenge(fullBank,{program:"XCEL",division,category:"MIX"});
    assert.equal(result.ok,true);
    assert.ok(result.questions.every(q=>q.divisions.includes(division)));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
    assert.equal(selectVerifiedChallenge(fullBank,{program:"XCEL",division,category:"VAULT"}).ok,division==="SILVER");
  }
  for(const status of ["DEV_ONLY","REVIEW_NEEDED","RETIRED"]) {
    const restricted=[...combined,...barsBatch.map(q=>({...q,verification:{status}}))];
    assert.equal(selectVerifiedChallenge(restricted,{program:"XCEL",division:"PLATINUM",category:"BARS"}).ok,false);
  }
});

test("owner Vault Batch 02 adds 25 valid unique verified records without ID collisions",()=>{
  assert.equal(vaultBatch.length,25);
  assert.equal(combined.length,45);
  assert.equal(new Set(combined.map(q=>q.id)).size,45);
  for(const [i,q] of vaultBatch.entries()) {
    assert.equal(q.id,"xcel-vt-"+String(i+1).padStart(3,"0"));
    assert.ok(isUsableQuestion(q));
    assert.deepEqual(q.apparatus,["VT"]);
    assert.equal(q.verification.status,"VERIFIED");
    assert.equal(q.verification.verifiedOn,"2026-08-30");
    assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle);
  }
});

test("Silver Vault supports exact 5/3/2 challenges, other Vault divisions retain insufficient states",()=>{
  const before=JSON.stringify(combined);
  for(const division of DIVISIONS) {
    const result=selectVerifiedChallenge(combined,{program:"XCEL",division,category:"VAULT"});
    if(division !== "SILVER") { assert.equal(result.ok,false); continue; }
    assert.equal(result.ok,true);
    assert.equal(result.questions.length,10);
    assert.equal(new Set(result.questions.map(q=>q.id)).size,10);
    assert.ok(result.questions.every(q=>q.divisions.includes(division) && questionApparatus(q).includes("VAULT")));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(result.questions.filter(q=>q.difficulty===tier).length,total);
    }
  }
  assert.equal(JSON.stringify(combined),before);
});

test("combined bank respects division eligibility and verification across randomized MIX challenges",()=>{
  for(const division of DIVISIONS) for(let run=0;run<20;run++) {
    const selection=selectVerifiedChallenge(combined,{program:"XCEL",division,category:"MIX"});
    assert.equal(selection.ok,true);
    assert.equal(new Set(selection.questions.map(q=>q.id)).size,10);
    assert.ok(selection.questions.every(q=>q.divisions.includes(division) && q.verification.status==="VERIFIED"));
    for(const [tier,total] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2})) {
      assert.equal(selection.questions.filter(q=>q.difficulty===tier).length,total);
    }
  }
  for(const status of ["DEV_ONLY","REVIEW_NEEDED","RETIRED"]) {
    assert.equal(selectVerifiedChallenge(vaultBatch.map(q=>({...q,verification:{status}})),{program:"XCEL",division:"SILVER",category:"VAULT"}).ok,false);
  }
});

test("owner Batch 01 has twenty unique usable verified records and complete source metadata",()=>{
  assert.equal(batch.length,20);
  assert.equal(new Set(batch.map(q=>q.id)).size,20);
  for(const [i,q] of batch.entries()) {
    assert.equal(q.id,"xcel-core-"+String(i+1).padStart(3,"0"));
    assert.ok(isUsableQuestion(q));
    assert.equal(q.verification.status,"VERIFIED");
    assert.equal(q.verification.verifiedOn,"2026-08-30");
    assert.ok(q.source.authority && q.source.documentId && q.source.pageLabel && q.source.ruleCycle);
  }
});

test("multi-apparatus aliases preserve source data and never imply vault eligibility",()=>{
  const before=JSON.stringify(batch);
  assert.deepEqual(questionApparatus(batch[0]),["BARS","BEAM","FLOOR"]);
  assert.deepEqual(batch[0].apparatus,["UB","BB","FX"]);
  assert.equal(selectVerifiedChallenge(batch,{program:"XCEL",division:"GOLD",category:"VAULT"}).count,0);
  assert.equal(JSON.stringify(batch),before);
  assert.equal(isUsableQuestion({...batch[0],apparatus:["UB","UNKNOWN"]}),false);
  assert.equal(isUsableQuestion({...batch[0],apparatus:[]}),false);
});

test("Batch 01 runs MIX for six divisions without rewriting difficulty or duplicating rules",()=>{
  const before=JSON.stringify(batch);
  for(const division of DIVISIONS) {
    const selection=selectVerifiedChallenge(batch,{program:"XCEL",division,category:"MIX"});
    assert.equal(selection.ok,true);
    assert.equal(new Set(selection.questions.map(q=>q.id)).size,10);
    assert.equal(selection.questions.filter(q=>q.difficulty==="FOUNDATION").length,5);
    assert.equal(selection.questions.filter(q=>q.difficulty==="COMPETITION_SMART").length,3);
    assert.equal(selection.questions.filter(q=>q.difficulty==="CODE_SMART").length,2);
  }
  for(const category of ["VAULT","BARS","BEAM","FLOOR","ARTISTRY","COMPETITION_SMART","MYTH_OR_RULE","WHATS_THE_CALL"]) {
    assert.equal(selectVerifiedChallenge(batch,{program:"XCEL",division:"GOLD",category}).ok,false);
  }
  assert.equal(JSON.stringify(batch),before);
});
