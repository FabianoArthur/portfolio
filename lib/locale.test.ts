import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";
import { defaultLocale, localeRedirectScript, locales, pickLocale } from "./locale";

describe("pickLocale", () => {
  it("offers exactly English and Portuguese, English first", () => {
    expect(locales).toEqual(["en", "pt"]);
    expect(defaultLocale).toBe("en");
  });

  it("maps any Portuguese variant to pt", () => {
    expect(pickLocale(["pt-BR"])).toBe("pt");
    expect(pickLocale(["pt-PT", "en"])).toBe("pt");
    expect(pickLocale(["PT"])).toBe("pt");
  });

  it("maps English variants to en", () => {
    expect(pickLocale(["en-GB", "pt-BR"])).toBe("en");
  });

  it("honours the order of preference, skipping unsupported languages", () => {
    expect(pickLocale(["de-DE", "fr", "pt-BR", "en"])).toBe("pt");
  });

  it("falls back to the default for empty or unknown lists", () => {
    expect(pickLocale([])).toBe("en");
    expect(pickLocale(undefined)).toBe("en");
    expect(pickLocale(["ja", "", "zh-CN"])).toBe("en");
  });
});

describe("localeRedirectScript", () => {
  function run(languages: string[] | undefined, basePath: string, language?: string) {
    const replaced: string[] = [];
    const context = {
      navigator: { languages, language },
      location: { replace: (url: string) => replaced.push(url) },
    };
    runInNewContext(localeRedirectScript(basePath), context);
    return replaced;
  }

  it("redirects to the preferred locale under the base path", () => {
    expect(run(["pt-BR", "en"], "/portifolio")).toEqual(["/portifolio/pt/"]);
    expect(run(["en-US"], "")).toEqual(["/en/"]);
  });

  it("falls back to navigator.language, then the default", () => {
    expect(run(undefined, "", "pt-PT")).toEqual(["/pt/"]);
    expect(run(undefined, "")).toEqual(["/en/"]);
    expect(run(["ja"], "/x")).toEqual(["/x/en/"]);
  });

  it("escapes the base path safely into the script", () => {
    expect(run(["en"], '/a"b')).toEqual(['/a"b/en/']);
  });
});
