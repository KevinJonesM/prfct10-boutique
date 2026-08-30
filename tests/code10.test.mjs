import test from "node:test";
import assert from "node:assert/strict";
import { getCode10Score, getLiveScore, selectVerifiedChallenge, selectDevelopmentChallenge, createGame, gameReducer, getGameResult } from "../src/components/Code10/engine.js";
import { createCode10ShareSvg } from "../src/components/Code10/shareCard.js";
import { scoreboardMarkup } from "../src/components/Code10/scoreboard.js";
const config = { program:"XCEL", division:"GOLD", category:"MIX" };
const tiers=["FOUNDATION","COMPETITION_SMART","CODE_SMART"];
// Entirely synthetic content. Never imported by the application.
function bank(status="VERIFIED") {
  return ["VAULT","BARS","BEAM","FLOOR","GENERAL","COMPETITION_SMART"].flatMap(category =>
    tiers.flatMap(difficulty => Array.from({length:6},(_,i)=>({
      id:category+"-"+difficulty+"-"+i, program:"XCEL", divisions:["GOLD"],
      apparatus:category==="COMPETITION_SMART" ? "GENERAL" : category, category,
      difficulty, format:"MULTIPLE_CHOICE", eyebrow:"UI TEST",
      question:"Match the test token.", options:[{id:"a",text:"Token A"},{id:"b",text:"Token B"}],
      correctOptionId:"a", explanation:"Token A matches.", takeaway:"Test token matched.",
      verification:{status}, source:{documentTitle:"TEST_ONLY"},ruleKey:"TEST_ONLY",tags:["WHATS_THE_CALL"]
    }))));
}
test("all eleven scores derive exact thousandths and correct labels",()=>{
  for(let raw=0;raw<=10;raw++){
    const s=getCode10Score(raw);
    assert.equal(s.vintageDisplayScore,9000+raw*100);
    assert.equal(s.formattedScore,((9000+raw*100)/1000).toFixed(3));
    assert.equal(s.incorrectAnswers,10-raw);assert.equal(s.accuracy,raw*10);
  }
  for(const invalid of [-1,11,2.5,NaN,"9"])assert.throws(()=>getCode10Score(invalid));
});
test("production categorically excludes DEV_ONLY, retired and review-needed records",()=>{
  for(const status of ["DEV_ONLY","RETIRED","REVIEW_NEEDED"]){
    assert.equal(selectVerifiedChallenge(bank(status),config).ok,false);
  }
  const mixed=[...bank(),...bank("DEV_ONLY").map(q=>({...q,id:"DEV-"+q.id}))];
  assert.ok(selectVerifiedChallenge(mixed,config).questions.every(q=>q.verification.status==="VERIFIED"));
  assert.ok(selectDevelopmentChallenge(bank("DEV_ONLY"),config).questions.every(q=>q.verification.status==="DEV_ONLY"));
});
test("empty banks and invalid configurations have controlled states",()=>{
  assert.deepEqual(selectVerifiedChallenge([],config),{ok:false,count:0,reason:"INSUFFICIENT_CONTENT"});
  for(const change of [{division:"SAPPHIRE"},{program:"OPTIONAL"},{category:"INVALID"}])assert.equal(selectVerifiedChallenge(bank(),{...config,...change}).ok,false);
  assert.equal(selectVerifiedChallenge(bank().slice(0,9),config).ok,false);
});
test("exact 10, unique IDs, balanced categories, 5/3/2 difficulty",()=>{
  const selected=selectVerifiedChallenge(bank(),config);
  assert.equal(selected.questions.length,10);assert.equal(new Set(selected.questions.map(q=>q.id)).size,10);
  for(const [tier,n] of Object.entries({FOUNDATION:5,COMPETITION_SMART:3,CODE_SMART:2}))assert.equal(selected.questions.filter(q=>q.difficulty===tier).length,n);
  for(const [category,n] of Object.entries({VAULT:2,BARS:2,BEAM:2,FLOOR:2,GENERAL:1,COMPETITION_SMART:1}))assert.equal(selected.questions.filter(q=>q.category===category).length,n);
});
test("filters division, category, apparatus and format/tag independently",()=>{
  const pool=bank();
  assert.ok(selectVerifiedChallenge(pool,{...config,category:"BEAM"}).questions.every(q=>q.apparatus==="BEAM"));
  assert.ok(selectVerifiedChallenge(pool,{...config,category:"COMPETITION_SMART"}).questions.every(q=>q.category==="COMPETITION_SMART"));
  assert.ok(selectVerifiedChallenge(pool,{...config,category:"WHATS_THE_CALL"}).questions.every(q=>q.tags.includes("WHATS_THE_CALL")));
});
test("new challenges avoid previous IDs when enough content exists",()=>{
  const first=selectVerifiedChallenge(bank(),config);
  const recentIds=first.questions.map(q=>q.id);
  const second=selectVerifiedChallenge(bank(),config,{recentIds});
  assert.ok(second.questions.every(q=>!recentIds.includes(q.id)));
  const small=selectVerifiedChallenge(first.questions,config,{recentIds});
  assert.equal(small.ok,true);
});
test("malformed records and ambiguous duplicate IDs cannot enter a challenge",()=>{
  const broken=bank().map(q=>({...q,correctOptionId:"missing"}));
  assert.equal(selectVerifiedChallenge(broken,config).ok,false);
  const duplicate=bank();assert.equal(selectVerifiedChallenge([...duplicate,...duplicate],config).ok,false);
});
test("insufficient difficulty variety is not silently relaxed",()=>{
  assert.equal(selectVerifiedChallenge(bank().filter(q=>q.difficulty==="FOUNDATION"),config).reason,"INSUFFICIENT_VARIETY");
});
test("answer locks, next requires answer, results require ten answers, live score only loses tenths",()=>{
  let game=createGame(selectVerifiedChallenge(bank(),config).questions);
  assert.throws(()=>getGameResult(game));
  assert.equal(gameReducer(game,{type:"next"}),game);
  assert.equal(gameReducer(game,{type:"answer",optionId:"fake"}),game);
  for(let i=0;i<10;i++){
    game=gameReducer(game,{type:"answer",optionId:i<7 ? "a":"b"});
    assert.equal(gameReducer(game,{type:"answer",optionId:"b"}),game);
    const expected=10-Math.max(0,i-6);
    assert.equal(getLiveScore(game.answers).rawScore,expected);
    game=gameReducer(game,{type:"next"});
  }
  assert.equal(game.complete,true);assert.equal(getGameResult(game).formattedScore,"9.700");
  assert.equal(gameReducer(game,{type:"answer",optionId:"a"}),game);
});
test("original scoreboard supports four and five panels",()=>{
  assert.equal((scoreboardMarkup(9900).body.match(/class="c10-number-panel"/g)||[]).length,4);
  assert.equal((scoreboardMarkup(10000).body.match(/class="c10-number-panel"/g)||[]).length,5);
  assert.ok(scoreboardMarkup(10000).width>scoreboardMarkup(9900).width);
});
test("share formats use correct dimensions, escape copy, watermark fixtures, no QA metadata",()=>{
  for(const [format,height] of [["story",1920],["feed",1350]]){
    const svg=createCode10ShareSvg({rawScore:9,format,program:"XCEL",division:"GOLD",categoryLabel:"MIX",label:"A < B",challengeLine:"PROTECT THE 10",dev:true,devLabel:"UI TEST ONLY"});
    assert.ok(svg.includes('width="1080" height="'+height+'"'));
    assert.ok(svg.includes("9.900"));assert.ok(svg.includes("UI TEST ONLY"));
    assert.ok(svg.includes("A &lt; B"));assert.equal(svg.includes("TEST_ONLY"),false);
    assert.match(svg, /data-artwork="imagotype"/);
    assert.match(svg, /data-artwork="gymnast"/);
  }
});
