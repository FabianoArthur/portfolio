import { describe, expect, it } from "vitest";
import { checkPage } from "./check-export.mjs";
import { contentSecurityPolicy, cspMetaTag, injectCsp } from "./csp.mjs";

const page = (head, lang = "en") =>
  `<!DOCTYPE html><html lang="${lang}"><head><meta charSet="utf-8"/>${head}</head><body></body></html>`;

describe("contentSecurityPolicy", () => {
  it("allows no third-party origin and blocks plugins and base hijacking", () => {
    expect(contentSecurityPolicy).not.toMatch(/https?:/);
    expect(contentSecurityPolicy).toContain("default-src 'self'");
    expect(contentSecurityPolicy).toContain("object-src 'none'");
    expect(contentSecurityPolicy).toContain("base-uri 'self'");
    expect(contentSecurityPolicy).not.toContain("frame-ancestors");
  });
});

describe("injectCsp", () => {
  it("puts the policy right after <meta charset>, before any script", () => {
    const out = injectCsp(page('<script src="/a.js"></script>'));
    expect(out.indexOf(cspMetaTag)).toBeGreaterThan(out.indexOf('charSet="utf-8"'));
    expect(out.indexOf(cspMetaTag)).toBeLessThan(out.indexOf("<script"));
  });

  it("is idempotent", () => {
    const once = injectCsp(page(""));
    expect(injectCsp(once)).toBe(once);
  });

  it("refuses a page without a charset meta", () => {
    expect(() => injectCsp("<html><head></head></html>")).toThrow();
  });
});

describe("checkPage", () => {
  it("accepts a page with the policy first", () => {
    expect(checkPage(injectCsp(page('<script src="/a.js"></script>')), { lang: "en" })).toEqual([]);
  });

  it("flags a missing or late policy", () => {
    expect(checkPage(page(""))).toContain("missing exact CSP meta");
    expect(checkPage(page(`<script src="/a.js"></script>${cspMetaTag}`))).toContain(
      "CSP meta comes after a script/stylesheet",
    );
  });

  it("flags a wrong lang and local paths", () => {
    const html = injectCsp(page("<title>/Users/someone/x</title>", "en"));
    const problems = checkPage(html, { lang: "pt-BR" });
    expect(problems).toContain('expected <html lang="pt-BR">');
    expect(problems).toContain("contains a local filesystem path");
  });
});
