import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { code10En, code10Es } from "../src/i18n/code10.js";
import { readProductionBank } from "./lib/code10-source-bank.mjs";

const flatten = (obj, prefix = "") => Object.entries(obj).flatMap(([key,value]) => typeof value === "string" ? [prefix+key] : flatten(value,prefix+key+"."));
const nonempty = value => typeof value === "string" && Boolean(value.trim());
const complete = (q,locale) => ["question","explanation","takeaway"].every(field => nonempty(q[field+"_"+locale])) && q.options.every(option => nonempty(option["text_"+locale]));
export async function auditCode10Localization() {
  const bank = (await readProductionBank()).filter(q => q.verification.status === "VERIFIED");
  const missing = { question_es: [], explanation_es: [], takeaway_es: [], "option.text_es": [] };
  const invalidCorrectIds = [], duplicateSpanishOptions = [];
  for (const q of bank) {
    for (const field of ["question_es","explanation_es","takeaway_es"]) if (!nonempty(q[field])) missing[field].push(q.id);
    for (const option of q.options) if (!nonempty(option.text_es)) missing["option.text_es"].push(q.id+":"+option.id);
    if (!q.options.some(option => option.id === q.correctOptionId)) invalidCorrectIds.push(q.id);
    const normalized = q.options.map(option => option.text_es?.normalize("NFC").trim().toLocaleLowerCase("es"));
    if (new Set(normalized).size !== normalized.length) duplicateSpanishOptions.push(q.id);
  }
  const enKeys = flatten(code10En).sort(), esKeys = flatten(code10Es).sort();
  const missingKeys = new Set();
  const directory = new URL("../src/components/Code10/", import.meta.url);
  const rawVisibleLiterals = [];
  for (const file of (await readdir(directory)).filter(file => file.endsWith(".jsx"))) {
    const source = await readFile(new URL(file,directory),"utf8");
    for (const match of source.matchAll(/["']code10\.([\w.]+)["']/g)) {
      if (!match[1].endsWith(".") && (!enKeys.includes(match[1]) || !esKeys.includes(match[1]))) missingKeys.add(match[1]);
    }
    for (const match of source.matchAll(/>([^<>{}\n]*[A-Za-z][^<>{}\n]*)</g)) {
      const text = match[1].trim();
      // Exact text nodes only. Expressions are audited separately by key expansion.
      if (!text.includes("=>") && !text.includes(";")) rawVisibleLiterals.push({file,text});
    }
  }
  for (const q of bank) {
    for (const key of ["programs."+q.program, "formats."+q.format, ...q.divisions.map(value => "divisions."+value)]) {
      if (!enKeys.includes(key) || !esKeys.includes(key)) missingKeys.add(key);
    }
  }
  const keyParity = enKeys.length === esKeys.length && enKeys.every((key,index) => key === esKeys[index]);
  const unexpectedRawEnglish = rawVisibleLiterals.filter(({text})=>! /^(?:PRFCT10|PLAY|CODE 10|Xcel|[0-9/·—\s])+$/.test(text));
  return { productionVerified:bank.length, completeEnglish:bank.filter(q=>complete(q,"en")).length, completeSpanish:bank.filter(q=>complete(q,"es")).length, missing, invalidCorrectIds, duplicateSpanishOptions, rawVisibleLiterals, unexpectedRawEnglish, missingKeys:[...missingKeys], keyParity, englishKeys:enKeys.length, spanishKeys:esKeys.length };
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const report = await auditCode10Localization();
  console.log(JSON.stringify(report,null,2));
  if (!report.keyParity || report.missingKeys.length || report.unexpectedRawEnglish.length || report.invalidCorrectIds.length || report.duplicateSpanishOptions.length || Object.values(report.missing).some(rows=>rows.length) || report.completeEnglish !== report.productionVerified) process.exitCode = 1;
}
