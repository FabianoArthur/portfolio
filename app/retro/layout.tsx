import type { Metadata, Viewport } from "next";
import { VT323, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMonoV6 = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono-v6",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zhyorg.dev"),
  title: "Zhyorg · V6 Retro",
  description:
    "1976 computer manual portfolio of Fabiano Arthur — V6 Retro variation.",
  openGraph: {
    title: "Zhyorg · V6 Retro",
    description: "1976 computer manual.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f0e5cf",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RetroLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${vt323.variable} ${dmSerif.variable} ${ibmPlexMonoV6.variable} h-full`}
    >
      <body
        className="flex min-h-full flex-col bg-v6-cream text-v6-ink"
        style={{
          fontFamily:
            "var(--font-ibm-plex-mono-v6), ui-monospace, monospace",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(58,31,13,0.04) 2px, rgba(58,31,13,0.04) 3px)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
