import { describe, expect, it } from "vitest";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import { projects } from "./projects";

const REPO = /^https:\/\/github\.com\/FabianoArthur\/[A-Za-z0-9._-]+$/;
const DEMO = /^https:\/\/fabianoarthur\.github\.io\/[A-Za-z0-9._-]+\/$/;

describe("projects", () => {
  it("features the nine public projects", () => {
    expect(projects.map((p) => p.id)).toEqual([
      "kitchen",
      "discordHq",
      "controlRoom",
      "algorithms",
      "arcade",
      "regex",
      "designSystem",
      "parking",
      "barbershop",
    ]);
  });

  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("links only to the owner's public GitHub repos and Pages demos", () => {
    for (const p of projects) {
      expect(p.repos.length).toBeGreaterThan(0);
      for (const r of p.repos) expect(r.url).toMatch(REPO);
      if (p.demo) expect(p.demo).toMatch(DEMO);
      expect(p.tech.length).toBeGreaterThan(0);
    }
  });

  it("has copy for every project in both languages", () => {
    for (const p of projects) {
      for (const messages of [en, pt]) {
        const item = (messages.projects.items as Record<string, { title: string; description: string }>)[p.id];
        expect(item?.title, p.id).toBeTruthy();
        expect(item?.description, p.id).toBeTruthy();
      }
    }
  });
});

describe("projects grid", () => {
  it("fills every row of the 6-column layout (wide = 3, normal = 2)", () => {
    let row = 0;
    for (const p of projects) {
      row += p.wide ? 3 : 2;
      if (row > 6) throw new Error(`${p.id} overflows its row`);
      if (row === 6) row = 0;
    }
    expect(row).toBe(0);
  });
});
