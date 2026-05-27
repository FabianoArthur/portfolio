import Reveal from "./Reveal";
import BlinkingCursor from "./BlinkingCursor";

const TERMINAL_CONTENT = `$ whoami
fabiano-arthur · full-stack engineer

$ cat manifesto.txt
> escrevo software para humanos, debugado por humanos.
> prefiro decisões simples a frameworks complicados.
> documentação é amor.
> o detalhe não é o detalhe — o detalhe é o trabalho.

$ ls skills/
typescript/  react/      next.js/    svelte/
node.js/     python/     go/         rust/
postgres/    redis/      docker/     linux/

$ uptime
> coding since 2022 · learning since always

$ _`;

export default function About() {
  return (
    <section className="px-6 py-6 md:px-14">
      <Reveal>
        <div className="border-[3px] border-v3-ink shadow-[6px_6px_0_#000]">
          {/* mac-style chrome bar */}
          <div className="flex items-center gap-[6px] border-b-[2px] border-v3-ink bg-[#1a1a1a] px-3 py-2">
            <span className="block h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="block h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="block h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[12px] text-[#999]">
              ~/zhyorg/about.sh
            </span>
          </div>
          {/* terminal body */}
          <pre
            className="m-0 overflow-x-auto whitespace-pre-wrap break-words bg-[#0a0a0a] p-5 text-[13px] leading-[1.6] text-[#0fff60] md:text-[14px]"
            style={{
              fontFamily:
                "var(--font-jetbrains-mono), var(--font-ibm-plex-mono), ui-monospace, monospace",
            }}
          >
            {TERMINAL_CONTENT}
            <BlinkingCursor />
          </pre>
        </div>
      </Reveal>
    </section>
  );
}
