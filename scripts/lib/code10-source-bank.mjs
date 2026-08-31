import { readFile, readdir } from "node:fs/promises";
import { stripTypeScriptTypes } from "node:module";
const directory = new URL("../../src/data/code10/xcel/", import.meta.url);
export async function readSourceBank(batchFilter = "") {
  const questions = [];
  for (const file of (await readdir(directory)).filter(name => name.includes("-batch") && name.includes(batchFilter)).sort()) {
    const module = await import("data:text/javascript;base64," + Buffer.from(stripTypeScriptTypes(await readFile(new URL(file, directory), "utf8"))).toString("base64"));
    questions.push(...Object.values(module).flat());
  }
  return questions;
}

// Follow the real registry, supporting both extensionless TS and explicit JS imports.
const modules = new Map();
async function moduleUrl(url) {
  if (modules.has(url.href)) return modules.get(url.href);
  const pending = (async () => {
    const original = await readFile(url, "utf8");
    let source = url.pathname.endsWith(".ts") ? stripTypeScriptTypes(original) : original;
    for (const match of [...source.matchAll(/from\s+["'](\.[^"']+)["']/g)]) {
      const dependency = new URL(/\.(?:js|ts)$/.test(match[1]) ? match[1] : match[1]+".ts", url);
      source = source.replace(match[0], 'from "'+await moduleUrl(dependency)+'"');
    }
    return "data:text/javascript;base64,"+Buffer.from(source).toString("base64");
  })();
  modules.set(url.href, pending);
  return pending;
}
export async function readProductionBank() {
  return (await import(await moduleUrl(new URL("../../src/data/code10/index.ts", import.meta.url)))).code10QuestionBank;
}
