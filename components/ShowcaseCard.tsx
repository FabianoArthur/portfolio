"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type CardTheme = "v3" | "v4" | "v5" | "v6";

type Props = {
  href: string;
  chipLabel: string;
  title: string;
  description: string;
  swatches: string[];
  tone: string;
  risk: string;
  memorable: number;
  labels: { tone: string; risk: string; memorable: string };
  theme: CardTheme;
  decoration?: ReactNode;
};

const themeConfig: Record<
  CardTheme,
  {
    bg: string;
    text: string;
    textDim: string;
    border: string;
    backgroundImage?: string;
    accentHex: string;
    chip: {
      bg: string;
      text: string;
      border: string;
      shape: "rounded" | "pill";
      font: "mono" | "sans";
    };
    swatchBorder?: string;
  }
> = {
  v3: {
    bg: "#0e0d10",
    text: "#e8e6e3",
    textDim: "rgba(232,230,227,0.6)",
    border: "1px solid rgba(255,255,255,0.06)",
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent 0 20px, rgba(232,230,223,0.025) 20px 21px)",
    accentHex: "#ff4d1c",
    chip: {
      bg: "transparent",
      text: "#ff4d1c",
      border: "1px solid rgba(255,77,28,0.65)",
      shape: "rounded",
      font: "mono",
    },
  },
  v4: {
    bg: "#0b0a10",
    text: "#e8e6e3",
    textDim: "rgba(232,230,227,0.6)",
    border: "1px solid rgba(255,255,255,0.06)",
    backgroundImage:
      "radial-gradient(circle at 92% 18%, rgba(180,140,255,0.22), transparent 55%)",
    accentHex: "#b48cff",
    chip: {
      bg: "transparent",
      text: "#b48cff",
      border: "1px solid rgba(180,140,255,0.6)",
      shape: "rounded",
      font: "mono",
    },
  },
  v5: {
    bg: "#fff7ea",
    text: "#1c1410",
    textDim: "rgba(28,20,16,0.65)",
    border: "1px solid rgba(28,20,16,0.08)",
    accentHex: "#ff5b1f",
    chip: {
      bg: "#ffffff",
      text: "#1c1410",
      border: "1px solid rgba(28,20,16,0.08)",
      shape: "pill",
      font: "sans",
    },
    swatchBorder: "1px solid rgba(0,0,0,0.1)",
  },
  v6: {
    bg: "#e8d9b8",
    text: "#3a1f0d",
    textDim: "rgba(58,31,13,0.65)",
    border: "1px solid rgba(58,31,13,0.15)",
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(58,31,13,0.05) 2px, rgba(58,31,13,0.05) 3px)",
    accentHex: "#d4501e",
    chip: {
      bg: "#ffffff",
      text: "#3a1f0d",
      border: "1px solid rgba(58,31,13,0.15)",
      shape: "pill",
      font: "sans",
    },
    swatchBorder: "1px solid rgba(58,31,13,0.18)",
  },
};

export function ShowcaseCard({
  href,
  chipLabel,
  title,
  description,
  swatches,
  tone,
  risk,
  memorable,
  labels,
  theme,
  decoration,
}: Props) {
  const cfg = themeConfig[theme];

  return (
    <motion.a
      href={href}
      className="group relative block overflow-hidden rounded-2xl"
      style={{
        background: cfg.bg,
        backgroundImage: cfg.backgroundImage,
        border: cfg.border,
        color: cfg.text,
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 24px 60px -20px ${cfg.accentHex}66, 0 0 0 1px ${cfg.accentHex}30`,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      {decoration && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          {decoration}
        </div>
      )}

      <div className="relative z-10 flex min-h-[440px] flex-col p-7 md:min-h-[520px] md:p-10">
        <header className="flex items-start justify-between gap-4">
          <span
            className={`inline-flex items-center text-[11px] font-medium uppercase tracking-[0.14em] ${
              cfg.chip.font === "mono" ? "font-mono" : "font-sans"
            }`}
            style={{
              padding: cfg.chip.shape === "pill" ? "6px 14px" : "4px 10px",
              borderRadius: cfg.chip.shape === "pill" ? 999 : 6,
              background: cfg.chip.bg,
              color: cfg.chip.text,
              border: cfg.chip.border,
            }}
          >
            {chipLabel}
          </span>
          <span
            aria-hidden
            className="text-xl leading-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: cfg.text }}
          >
            ↗
          </span>
        </header>

        <div className="mt-8 flex flex-1 flex-col justify-between gap-8 md:mt-10">
          <div>
            <h3
              className="font-serif text-[42px] font-normal italic leading-[1.05] tracking-[-0.02em] md:text-[56px]"
              style={{ color: cfg.text }}
            >
              {title}
            </h3>
            <p
              className="mt-5 max-w-[460px] text-[15px] leading-[1.55]"
              style={{ color: cfg.textDim }}
            >
              {description}
            </p>
          </div>

          <footer className="flex flex-col gap-4">
            <div className="flex gap-2">
              {swatches.map((c, i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-md"
                  style={{
                    background: c,
                    border: cfg.swatchBorder,
                  }}
                />
              ))}
            </div>
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[12px]"
              style={{ color: cfg.textDim }}
            >
              <span>
                <strong style={{ color: cfg.text }} className="font-medium">
                  {labels.tone}
                </strong>{" "}
                {tone}
              </span>
              <span>
                <strong style={{ color: cfg.text }} className="font-medium">
                  {labels.risk}
                </strong>{" "}
                {risk}
              </span>
              <span>
                <strong style={{ color: cfg.text }} className="font-medium">
                  {labels.memorable}
                </strong>{" "}
                {"✓".repeat(memorable)}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </motion.a>
  );
}
