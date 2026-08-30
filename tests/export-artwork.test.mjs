import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { imagotypeMarkup, gymnastMarkup } from "../src/components/Play/exportArtwork.js";
import { embedSvgImages } from "../src/components/Play/svgExport.js";

test("exported imagotype preserves the supplied vector paths and colors exactly", async () => {
  const original = await readFile(new URL("../public/images/play/prfct10-imagotype.svg", import.meta.url), "utf8");
  const paths = svg => [...svg.matchAll(/<path\b[^>]+\/>/g)].map(match => match[0]);
  assert.deepEqual(paths(imagotypeMarkup(0, 0, 190, 176)), paths(original));
  assert.doesNotMatch(imagotypeMarkup(0, 0, 190, 176), /<image|href=/);
});

test("silhouette subresources are embedded once even when reused for offset layers", async () => {
  let loads = 0;
  const source = `<svg>${imagotypeMarkup(0, 0, 190, 176)}${gymnastMarkup({id:"test", x:0, y:200, width:200, height:300})}</svg>`;
  const result = await embedSvgImages(source, async () => { loads++; return "data:image/png;base64,AA=="; });
  assert.equal(loads, 1);
  assert.equal((result.match(/href="data:image\/png;base64,AA=="/g) || []).length, 2);
  assert.doesNotMatch(result, /href="\//);
  assert.match(result, /data-artwork="imagotype"/);
});

test("missing artwork rejects export instead of silently producing an incomplete image", async () => {
  await assert.rejects(embedSvgImages('<svg><image href="/missing.png"/></svg>', async () => { throw new Error("Missing artwork"); }), /Missing artwork/);
});

test("embedded artwork does not need another request", async () => {
  const source = '<svg><image href="data:image/png;base64,AA=="/></svg>';
  assert.equal(await embedSvgImages(source, () => { throw new Error("Must not fetch"); }), source);
});
