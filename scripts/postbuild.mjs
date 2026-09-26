#!/usr/bin/env node
// Injects the CSP meta into every exported HTML page (see csp.mjs for why it
// can't be rendered from React).
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { injectCsp } from "./csp.mjs";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : name.endsWith(".html") ? [path] : [];
  });
}

const files = walk(process.argv[2] ?? "out");
for (const file of files) writeFileSync(file, injectCsp(readFileSync(file, "utf8")));
console.log(`postbuild: CSP injected into ${files.length} HTML files`);
