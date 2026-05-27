"use client";

import { motion } from "framer-motion";

export type Project = {
  n: string;
  t: string;
  sub: string;
  bg: string;
  color: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ boxShadow: "6px 6px 0 #000" }}
      whileHover={{
        x: -2,
        y: -2,
        boxShadow: "9px 9px 0 #000",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="border-[3px] border-v3-ink p-[18px]"
      style={{ background: project.bg, color: project.color }}
    >
      <div className="text-[11px] tracking-[0.1em]">PROJECT {project.n}</div>
      <div
        className="my-[10px] text-[36px] leading-none sm:text-[44px]"
        style={{
          fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
          fontWeight: 900,
        }}
      >
        {project.t}
      </div>
      <div className="text-[13px]">{project.sub}</div>
      <div
        className="mt-[18px] aspect-[16/10] border-[2px] border-dashed"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,.18) 8px 9px)",
          borderColor: "currentColor",
        }}
      />
    </motion.div>
  );
}
