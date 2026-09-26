#!/usr/bin/env node
// Smoke check on the static export (out/): every page exists, has the right
// lang, carries the exact CSP before any script/stylesheet, and leaks nothing
// local. Exits non-zero with a list of problems.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { cspMetaTag } from "./csp.mjs";

export function checkPage(html, { lang } = {}) {
  const problems = [];
  const head = html.slice(0, html.indexOf("</head>"));
  const csp = head.indexOf(cspMetaTag);
  if (csp === -1) problems.push("missing exact CSP meta");
  const firstResource = head.search(/<script|<link rel="stylesheet"|<link rel="preload"|<style/i);
  if (csp !== -1 && firstResource !== -1 && firstResource < csp)
    problems.push("CSP meta comes after a script/stylesheet");
  if (html.split(cspMetaTag).length > 2) problems.push("CSP meta appears more than once");
  if (lang && !html.includes(`<html lang="${lang}"`)) problems.push(`expected <html lang="${lang}">`);
  if (/\/Users\/|\/home\/runner\//.test(html)) problems.push("contains a local filesystem path");
  return problems;
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

function main(outDir = "out") {
  const expected = { "index.html": "en", "404.html": "en", "en/index.html": "en", "pt/index.html": "pt-BR" };
  const problems = [];
  for (const [file, lang] of Object.entries(expected)) {
    let html;
    try {
      html = readFileSync(join(outDir, file), "utf8");
    } catch {
      problems.push(`${file}: missing`);
      continue;
    }
    for (const p of checkPage(html, { lang })) problems.push(`${file}: ${p}`);
  }
  for (const file of htmlFiles(outDir)) {
    const rel = relative(outDir, file);
    if (rel in expected) continue;
    for (const p of checkPage(readFileSync(file, "utf8"))) problems.push(`${rel}: ${p}`);
  }
  for (const file of [".nojekyll", "opengraph-image.png", "sitemap.xml", "robots.txt"]) {
    try {
      statSync(join(outDir, file));
    } catch {
      problems.push(`${file}: missing`);
    }
  }
  if (problems.length) {
    console.error(`check-export: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
    process.exit(1);
  }
  console.log(`check-export: ${htmlFiles(outDir).length} HTML files OK`);
}

if (import.meta.url === `file://${process.argv[1]}`) main(process.argv[2]);
