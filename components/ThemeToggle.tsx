"use client";

import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, nextTheme, parseStoredTheme, type Theme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./Icons";

// The theme lives on <html data-theme> (set before paint by the head script);
// this component just reads and flips it.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => parseStoredTheme(document.documentElement.dataset.theme) ?? "dark";
const getServerTheme = (): Theme | null => null;

export function ThemeToggle() {
  const t = useTranslations("themeToggle");
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next = nextTheme(theme ?? getTheme());
    const root = document.documentElement;
    root.dataset.theme = next;
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this page only.
    }
  }

  const label = theme === "light" ? t("toDark") : t("toLight");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-dim transition-colors hover:bg-surface-hover hover:text-ink"
    >
      {/* Before hydration the theme is unknown: render both icons, CSS picks one. */}
      <SunIcon className={theme === null ? "hidden dark:block" : theme === "dark" ? "block" : "hidden"} />
      <MoonIcon className={theme === null ? "block dark:hidden" : theme === "light" ? "block" : "hidden"} />
    </button>
  );
}
