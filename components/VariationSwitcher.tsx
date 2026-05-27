"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SwitcherLocale = "pt" | "en" | "es" | "zh";

type SwitcherLabels = {
  trigger: string;
  close: string;
  ariaOpen: string;
  ariaClose: string;
  menuHeader: string;
  current: string;
};

const LABELS: Record<SwitcherLocale, SwitcherLabels> = {
  pt: {
    trigger: "Alterar design",
    close: "Fechar",
    ariaOpen: "Alterar design",
    ariaClose: "Fechar troca de design",
    menuHeader: "Designs disponíveis",
    current: "atual",
  },
  en: {
    trigger: "Change design",
    close: "Close",
    ariaOpen: "Change design",
    ariaClose: "Close design switcher",
    menuHeader: "Available designs",
    current: "current",
  },
  es: {
    trigger: "Cambiar diseño",
    close: "Cerrar",
    ariaOpen: "Cambiar diseño",
    ariaClose: "Cerrar selector de diseño",
    menuHeader: "Diseños disponibles",
    current: "actual",
  },
  zh: {
    trigger: "切换设计",
    close: "关闭",
    ariaOpen: "切换设计",
    ariaClose: "关闭设计切换器",
    menuHeader: "可用设计",
    current: "当前",
  },
};

type Variation = {
  id: "v3-brutalist" | "v4-dark" | "v5-vibrant" | "v6-retro";
  label: string;
  href: string;
  tint: string;
};

type VariationSwitcherProps = {
  current: Variation["id"];
  accent?: string;
  locale?: SwitcherLocale;
};

export function VariationSwitcher({
  current,
  accent = "#b48cff",
  locale = "pt",
}: VariationSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const t = LABELS[locale];

  const variations: Variation[] = [
    { id: "v3-brutalist", label: "V3 · Brutalist", href: "/brutalist", tint: "#ff4d1c" },
    { id: "v4-dark", label: "V4 · Dark Elegant", href: `/${locale}`, tint: "#b48cff" },
    { id: "v5-vibrant", label: "V5 · Vibrant", href: "/vibrant", tint: "#ff5b1f" },
    { id: "v6-retro", label: "V6 · Retro", href: "/retro", tint: "#d4501e" },
  ];

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
      className="fixed bottom-5 right-5 z-[9999] font-mono"
      style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mb-2.5 min-w-[240px] rounded-[14px] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25),_0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <div className="px-2.5 pt-2 pb-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
              {t.menuHeader}
            </div>
            {variations.map((p) => {
              const active = p.id === current;
              return (
                <a
                  key={p.id}
                  href={p.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-[13px] no-underline ${
                    active
                      ? "cursor-default bg-black/[0.05] font-semibold text-neutral-900"
                      : "font-medium text-neutral-900 hover:bg-black/[0.04]"
                  }`}
                  onClick={(e) => {
                    if (active) e.preventDefault();
                  }}
                >
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ background: p.tint }}
                  />
                  <span className="flex-1">{p.label}</span>
                  {active && (
                    <span className="text-[10px] text-neutral-500">
                      {t.current}
                    </span>
                  )}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-label={open ? t.ariaClose : t.ariaOpen}
        className="flex cursor-pointer items-center gap-2 rounded-full border-0 bg-neutral-900 px-4 py-3 text-[13px] font-medium tracking-[0.02em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.35),_0_0_0_1px_rgba(255,255,255,0.1)]"
      >
        <span
          aria-hidden
          className="h-2 w-2 rounded-full"
          style={{ background: accent }}
        />
        <span>{open ? t.close : t.trigger}</span>
        <span aria-hidden className="opacity-50">
          {open ? "×" : "↑"}
        </span>
      </button>
    </div>
  );
}
