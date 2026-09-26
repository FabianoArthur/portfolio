import type { Metadata } from "next";
import { instrumentSerif, inter } from "@/app/fonts";
import { DocumentHead } from "@/components/DocumentHead";
import { localeRedirectScript } from "@/lib/locale";
import { basePath, siteUrl } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Fabiano Arthur — Full-stack developer",
  description: "Portfolio of Fabiano Arthur. Choose a language: English or Português.",
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: false, follow: true },
};

// GitHub Pages can't negotiate language, so the root page picks one in the
// browser and redirects; the links are the no-JS fallback.
export default function RootRedirect() {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <DocumentHead />
      <body className="grid min-h-dvh place-items-center font-sans">
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript(basePath) }} />
        <main className="px-6 text-center">
          <h1 className="font-serif text-4xl italic">Fabiano Arthur</h1>
          <ul className="mt-6 flex justify-center gap-6 text-lg">
            <li>
              <a className="underline decoration-accent underline-offset-4" href={`${basePath}/en/`} hrefLang="en" lang="en">
                English
              </a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href={`${basePath}/pt/`} hrefLang="pt-BR" lang="pt-BR">
                Português
              </a>
            </li>
          </ul>
        </main>
      </body>
    </html>
  );
}
