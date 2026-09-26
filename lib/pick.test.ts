import { describe, expect, it } from "vitest";
import pick from "./pick";

describe("pick", () => {
  it("keeps only the requested keys that exist", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
    expect(pick({ a: 1 } as Record<string, number>, ["z"])).toEqual({});
  });
});
