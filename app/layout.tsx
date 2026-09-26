import type { ReactNode } from "react";
import "./globals.css";

// Pass-through root layout: every page renders its own <html> so the
// locale-specific layout can set `lang`. See app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
