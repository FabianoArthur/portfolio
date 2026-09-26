import { describe, expect, it } from "vitest";
import { normalizeBasePath, withBasePath } from "./paths";

describe("normalizeBasePath", () => {
  it("returns an empty string when unset", () => {
    expect(normalizeBasePath(undefined)).toBe("");
    expect(normalizeBasePath("")).toBe("");
    expect(normalizeBasePath("/")).toBe("");
  });

  it("adds a leading slash and strips trailing ones", () => {
    expect(normalizeBasePath("portfolio")).toBe("/portfolio");
    expect(normalizeBasePath("/portfolio/")).toBe("/portfolio");
    expect(normalizeBasePath("/a/b//")).toBe("/a/b");
  });
});

describe("withBasePath", () => {
  it("prefixes absolute paths with the base path", () => {
    expect(withBasePath("/en/", "/portfolio")).toBe("/portfolio/en/");
    expect(withBasePath("en/", "/portfolio")).toBe("/portfolio/en/");
  });

  it("leaves paths untouched without a base path", () => {
    expect(withBasePath("/en/", "")).toBe("/en/");
  });
});
