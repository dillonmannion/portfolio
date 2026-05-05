import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { DATA } from "../resume";

const PUBLIC_DIR = path.resolve(__dirname, "../../../public");

function publicFileExists(filePath: string): boolean {
  if (!filePath) return false;
  const resolved = filePath.startsWith("/")
    ? path.join(PUBLIC_DIR, filePath)
    : path.join(PUBLIC_DIR, filePath);
  return fs.existsSync(resolved);
}

describe("resume data — PLAN.md compliance", () => {
  describe("top-level fields", () => {
    it("description matches PDF header", () => {
      expect(DATA.description).toContain(
        "Operations and systems-implementation builder",
      );
      expect(DATA.description).toContain(
        "booking, scheduling, finance, and tax workflows",
      );
    });

    it("summary references discovery-to-launch narrative", () => {
      expect(DATA.summary).toContain("discovery");
      expect(DATA.summary).toContain("launch");
    });

    it("summary preserves anchor links", () => {
      expect(DATA.summary).toContain("/#education");
      expect(DATA.summary).toContain("/#projects");
      expect(DATA.summary).toContain("/#lab");
    });
  });

  describe("work experience", () => {
    const workByCompany = (name: string) =>
      DATA.work.find((w) => w.company === name);

    it("Independent Business Systems Developer entry exists", () => {
      const entry = workByCompany("Independent");
      expect(entry).toBeDefined();
      expect(entry!.title).toBe("Business Systems Developer");
      expect(entry!.logoUrl).toBe("/fleuron-glyph.svg");
    });

    it("Independent entry has PDF bullets content", () => {
      const entry = workByCompany("Independent");
      expect(entry).toBeDefined();
      expect(entry!.description.length).toBeGreaterThan(100);
    });

    it("Amazon title updated to Operations Point of Contact framing", () => {
      const entry = workByCompany("Amazon");
      expect(entry).toBeDefined();
      expect(entry!.title).toContain("Operations Point of Contact");
    });

    it("Amazon has PDF bullets content", () => {
      const entry = workByCompany("Amazon");
      expect(entry).toBeDefined();
      expect(entry!.description.length).toBeGreaterThan(100);
    });

    it("Costco Wholesale entry exists", () => {
      const entry = workByCompany("Costco Wholesale");
      expect(entry).toBeDefined();
      expect(entry!.title).toContain("Seasonal Merchandise Associate");
      expect(entry!.location).toContain("Rancho Cucamonga");
    });

    it("Costco dates match PDF", () => {
      const entry = workByCompany("Costco Wholesale");
      expect(entry).toBeDefined();
      expect(entry!.start).toContain("Oct 2025");
      expect(entry!.end).toContain("Jan 2026");
    });

    it("Premier Swim Academy is kept (condensed)", () => {
      const entry = workByCompany("Premier Swim Academy");
      expect(entry).toBeDefined();
    });

    it("Wendy's is kept (condensed)", () => {
      const entry = workByCompany("Wendy's");
      expect(entry).toBeDefined();
    });

    it("TPFS Warehouse is removed", () => {
      const entry = workByCompany("TPFS Warehouse");
      expect(entry).toBeUndefined();
    });

    it("old Freelance entry is removed", () => {
      const entry = workByCompany("Freelance");
      expect(entry).toBeUndefined();
    });

    it("all work entries with logoUrl point to existing files", () => {
      for (const entry of DATA.work) {
        if (entry.logoUrl) {
          expect(
            publicFileExists(entry.logoUrl),
            `Missing logo: ${entry.logoUrl} for ${entry.company}`,
          ).toBe(true);
        }
      }
    });
  });

  describe("projects", () => {
    const projectByTitle = (title: string) =>
      DATA.projects.find((p) => p.title === title);

    it("Grizzly Getaway exists (renamed from Alpine Roots Big Bear)", () => {
      expect(projectByTitle("Grizzly Getaway")).toBeDefined();
      expect(projectByTitle("Alpine Roots Big Bear")).toBeUndefined();
    });

    it("Grizzly Getaway has PDF description", () => {
      const p = projectByTitle("Grizzly Getaway");
      expect(p).toBeDefined();
      expect(p!.description).toContain("booking");
      expect(p!.description).toContain("cabin-rental");
      expect(p!.description).toContain("deduction tracking");
    });

    it("Picasso Hair Salon has updated PDF description", () => {
      const p = projectByTitle("Picasso Hair Salon");
      expect(p).toBeDefined();
      expect(p!.description).toContain("multi-step scheduling");
      expect(p!.description).toContain("Supabase");
      expect(p!.description).toContain("internationalized");
    });

    it("Quantasy exists (renamed from Quantasy.ai)", () => {
      expect(projectByTitle("Quantasy")).toBeDefined();
      expect(projectByTitle("Quantasy.ai")).toBeUndefined();
    });

    it("Quantasy has PDF description", () => {
      const p = projectByTitle("Quantasy");
      expect(p).toBeDefined();
      expect(p!.description).toContain("~40 testers");
      expect(p!.description).toContain("roster management");
    });

    it("Fleuron exists (renamed from Expressions Hair Designs)", () => {
      expect(projectByTitle("Fleuron")).toBeDefined();
      expect(projectByTitle("Expressions Hair Designs")).toBeUndefined();
    });

    it("Fleuron has PDF description", () => {
      const p = projectByTitle("Fleuron");
      expect(p).toBeDefined();
      expect(p!.description).toContain("multi-tenant SaaS");
      expect(p!.description).toContain("finance tracking");
    });

    it("UC Davis DataLab project exists", () => {
      const p = projectByTitle("UC Davis DataLab");
      expect(p).toBeDefined();
      expect(p!.description).toContain("43,800 records");
      expect(p!.description).toContain("PCA");
    });

    it("UC Davis DataLab dates match PDF", () => {
      const p = projectByTitle("UC Davis DataLab");
      expect(p).toBeDefined();
      expect(p!.dates).toContain("Apr");
      expect(p!.dates).toContain("Jun 2025");
    });

    it("Cafepillar project exists", () => {
      const p = projectByTitle("Cafepillar");
      expect(p).toBeDefined();
      expect(p!.description).toContain("game-state");
      expect(p!.description).toContain("A* pathfinding");
    });

    it("Cafepillar dates match PDF", () => {
      const p = projectByTitle("Cafepillar");
      expect(p).toBeDefined();
      expect(p!.dates).toContain("Sep 2024");
      expect(p!.dates).toContain("Mar 2025");
    });

    it("Jurnl is removed", () => {
      expect(projectByTitle("Jurnl")).toBeUndefined();
    });

    it("all projects with image field point to existing files", () => {
      for (const p of DATA.projects) {
        if (p.image) {
          expect(
            publicFileExists(p.image),
            `Missing image: ${p.image} for ${p.title}`,
          ).toBe(true);
        }
      }
    });
  });

  describe("education", () => {
    const schoolByName = (name: string) =>
      DATA.education.find((e) => e.school === name);

    it("UC Davis kept", () => {
      expect(schoolByName("University of California, Davis")).toBeDefined();
    });

    it("Chaffey College kept", () => {
      expect(schoolByName("Chaffey College")).toBeDefined();
    });

    it("Los Osos High School removed", () => {
      expect(schoolByName("Los Osos High School")).toBeUndefined();
    });
  });

  describe("lab section", () => {
    it("no changes to lab entries", () => {
      expect(DATA.lab.length).toBe(4);
      const titles = DATA.lab.map((l) => l.title);
      expect(titles).toContain("ClassifyThatBeat");
      expect(titles).toContain("agent-link-mcp");
      expect(titles).toContain("Middle-earth");
      expect(titles).toContain("PrimateHealth Analysis");
    });
  });

  describe("image inventory", () => {
    it("Grizzly Getaway has a hero image", () => {
      const p = DATA.projects.find((p) => p.title === "Grizzly Getaway");
      expect(p).toBeDefined();
      expect(p!.image).toBeTruthy();
    });

    it("Picasso Hair Salon has a hero image", () => {
      const p = DATA.projects.find((p) => p.title === "Picasso Hair Salon");
      expect(p).toBeDefined();
      expect(p!.image).toBeTruthy();
    });

    it("Cafepillar has a hero image", () => {
      const p = DATA.projects.find((p) => p.title === "Cafepillar");
      expect(p).toBeDefined();
      expect(p!.image).toBeTruthy();
    });
  });
});
