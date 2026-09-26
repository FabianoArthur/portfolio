import { describe, expect, it } from "vitest";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";

function keys(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object") return [prefix];
  return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
    keys(v, prefix ? `${prefix}.${k}` : k),
  );
}

function leaves(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value === null || typeof value !== "object") return [];
  return Object.values(value as Record<string, unknown>).flatMap(leaves);
}

describe("messages", () => {
  it("English and Portuguese define exactly the same keys", () => {
    expect(keys(pt).sort()).toEqual(keys(en).sort());
  });

  it("has no empty strings", () => {
    for (const s of [...leaves(en), ...leaves(pt)]) expect(s.trim()).not.toBe("");
  });

  it("keeps ICU placeholders consistent between languages", () => {
    const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort();
    const enKeys = keys(en);
    const get = (obj: unknown, path: string) =>
      path.split(".").reduce<unknown>((o, k) => (o as Record<string, unknown>)[k], obj);
    for (const k of enKeys) {
      expect(placeholders(String(get(pt, k))), k).toEqual(placeholders(String(get(en, k))));
    }
  });
});
