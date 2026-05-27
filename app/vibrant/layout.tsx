import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter-v5",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zhyorg.dev"),
  title: "Zhyorg · V5 Vibrant",
  description:
    "Playful and pro portfolio of Fabiano Arthur — V5 Vibrant variation.",
  openGraph: {
    title: "Zhyorg · V5 Vibrant",
    description: "Playful and pro.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff7ea",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function VibrantLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body
        className="flex min-h-full flex-col bg-v5-cream text-v5-ink"
        style={{
          fontFamily:
            "var(--font-inter-v5), -apple-system, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
