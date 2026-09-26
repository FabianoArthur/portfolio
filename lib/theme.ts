export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export function parseStoredTheme(value: string | null | undefined): Theme | null {
  return value === "light" || value === "dark" ? value : null;
}

export function resolveTheme(
  stored: string | null | undefined,
  systemPrefersDark: boolean,
): Theme {
  return parseStoredTheme(stored) ?? (systemPrefersDark ? "dark" : "light");
}

export function nextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

/**
 * Runs inline in <head> before first paint so the page never flashes the
 * wrong theme. Mirrors `resolveTheme`; storage access can throw (privacy
 * modes), so it is guarded.
 */
export const themeInitScript = `(function(){var s=null;try{s=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var d=document.documentElement;d.dataset.theme=t;d.style.colorScheme=t})()`;
