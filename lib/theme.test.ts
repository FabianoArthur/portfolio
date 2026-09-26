import { describe, expect, it } from "vitest";
import { nextTheme, parseStoredTheme, resolveTheme } from "./theme";

describe("parseStoredTheme", () => {
  it("accepts only light or dark", () => {
    expect(parseStoredTheme("light")).toBe("light");
    expect(parseStoredTheme("dark")).toBe("dark");
    expect(parseStoredTheme("system")).toBeNull();
    expect(parseStoredTheme(null)).toBeNull();
    expect(parseStoredTheme("<script>")).toBeNull();
  });
});

describe("resolveTheme", () => {
  it("prefers an explicit stored choice over the system", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });

  it("follows the system when nothing valid is stored", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
    expect(resolveTheme("garbage", false)).toBe("light");
  });
});

describe("nextTheme", () => {
  it("toggles between the two themes", () => {
    expect(nextTheme("dark")).toBe("light");
    expect(nextTheme("light")).toBe("dark");
  });
});
