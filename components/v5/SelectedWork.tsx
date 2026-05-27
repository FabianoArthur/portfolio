import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const COL = {
  orange: "#ff5b1f",
  blue: "#2a6fdb",
  green: "#1f8a5b",
  purple: "#7a52f5",
};

const PROJECTS = [
  { tag: "em construção", title: "Project 001", color: COL.orange, num: "01" },
  { tag: "em construção", title: "Project 002", color: COL.blue, num: "02" },
  {
    tag: "vaga aberta",
    title: "O seu projeto aqui?",
    color: COL.green,
    num: "03",
  },
  {
    tag: "vaga aberta",
    title: "Open commission slot",
    color: COL.purple,
    num: "04",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="px-6 pb-20 md:px-14 md:pb-20">
      <Reveal>
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <h2
            className="text-[44px] font-bold leading-[1] md:text-[64px]"
            style={{ letterSpacing: "-0.035em" }}
          >
            Trabalhos
            <br />
            <span className="italic text-v5-purple">selecionados.</span>
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-v5-ink px-3.5 py-2 text-[13px] font-medium text-v5-cream">
            ↓ 4 vagas abertas
          </span>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.06}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
