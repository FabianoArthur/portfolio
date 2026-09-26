import { instrumentSerif, inter } from "@/app/fonts";
import { DocumentHead } from "@/components/DocumentHead";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import { basePath } from "@/lib/paths";

// Static 404.html for GitHub Pages. No locale is known here, so it is bilingual.
export default function NotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <DocumentHead />
      <body className="grid min-h-dvh place-items-center font-sans">
        <main className="px-6 text-center">
          <p className="font-mono text-sm text-dim">404</p>
          <h1 className="mt-3 font-serif text-5xl italic">{en.notFound.title}</h1>
          <p className="mt-2 text-dim" lang="pt-BR">{pt.notFound.title}</p>
          <ul className="mt-8 flex justify-center gap-6">
            <li>
              <a className="underline decoration-accent underline-offset-4" href={`${basePath}/en/`}>
                {en.notFound.back}
              </a>
            </li>
            <li>
              <a className="underline decoration-accent underline-offset-4" href={`${basePath}/pt/`} lang="pt-BR">
                {pt.notFound.back}
              </a>
            </li>
          </ul>
        </main>
      </body>
    </html>
  );
}
