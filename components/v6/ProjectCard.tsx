"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  side: string;
  num: string;
  label: string;
  cassetteColor: string;
};

export default function ProjectCard({
  side,
  num,
  label,
  cassetteColor,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-v6-paper"
      style={{
        border: "2px solid #3a1f0d",
        padding: 16,
        boxShadow: "4px 4px 0 #3a1f0d",
      }}
      initial={{ y: 0, boxShadow: "4px 4px 0 #3a1f0d" }}
      whileHover={{
        y: -2,
        boxShadow: "8px 8px 0 #2d6b6b",
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cassette */}
      <div
        className="relative mb-3 flex items-center justify-center"
        style={{
          aspectRatio: "1 / 1",
          background: cassetteColor,
          border: "1px solid #3a1f0d",
        }}
      >
        {/* Left reel */}
        <div
          className="absolute bg-v6-cream"
          style={{
            top: "38%",
            left: "20%",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid #3a1f0d",
          }}
        >
          <div
            className="absolute bg-v6-ink"
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        {/* Right reel */}
        <div
          className="absolute bg-v6-cream"
          style={{
            top: "38%",
            right: "20%",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid #3a1f0d",
          }}
        >
          <div
            className="absolute bg-v6-ink"
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        {/* Track label */}
        <div
          className="absolute flex items-center justify-center bg-v6-cream text-v6-ink"
          style={{
            bottom: "18%",
            left: "12%",
            right: "12%",
            height: 22,
            border: "1px solid #3a1f0d",
            fontSize: 14,
          }}
        >
          TRACK {num}
        </div>
      </div>

      <div
        className="uppercase text-v6-rust"
        style={{
          fontFamily: "var(--font-vt323), monospace",
          fontSize: 16,
          letterSpacing: "0.04em",
        }}
      >
        {side} · {num}
      </div>
      <div className="mt-1 text-[20px] md:text-[22px]">{label}</div>
    </motion.div>
  );
}
