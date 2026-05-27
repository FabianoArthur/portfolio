import type { Metadata, Viewport } from "next";
import { Archivo_Black, JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  // Archivo Black ships only as a single black weight; next/font types allow "400" only.
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zhyorg.dev"),
  title: "Zhyorg · V3 Brutalist",
  description:
    "Terminal-flavored portfolio of Fabiano Arthur — V3 Brutalist variation.",
  openGraph: {
    title: "Zhyorg · V3 Brutalist",
    description: "Terminal-flavored portfolio.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#e8e6df",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function BrutalistLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body
        className="flex min-h-full flex-col bg-v3-cream text-v3-ink"
        style={{
          fontFamily:
            "var(--font-jetbrains-mono), ui-monospace, monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
