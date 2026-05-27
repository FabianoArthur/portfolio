"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  tag: string;
  title: string;
  color: string;
  num: string;
};

export default function ProjectCard({
  tag,
  title,
  color,
  num,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      whileHover={{
        y: -4,
        scale: 1.01,
        boxShadow: `0 18px 40px -12px ${color}66`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-[24px] bg-white p-2"
      style={{
        border: "1.5px solid rgba(28,20,16,0.1)",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{
          aspectRatio: "16/10",
          background: `radial-gradient(circle at 30% 30%, ${color}, ${color}88)`,
        }}
      >
        <div
          className="absolute flex h-11 w-11 items-center justify-center rounded-[14px] bg-v5-ink font-bold text-white"
          style={{ top: 16, left: 16 }}
        >
          {num}
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{
            height: "60%",
            background:
              "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />
      </div>
      <div className="flex items-baseline justify-between px-3.5 pt-[18px] pb-3">
        <div>
          <div
            className="text-[12px] font-medium uppercase"
            style={{
              color: "rgba(28,20,16,0.6)",
              letterSpacing: "0.05em",
            }}
          >
            {tag}
          </div>
          <div
            className="mt-1 text-[22px] font-semibold"
            style={{ letterSpacing: "-0.01em" }}
          >
            {title}
          </div>
        </div>
        <div className="text-[22px]">→</div>
      </div>
    </motion.article>
  );
}
