"use client";

import { motion } from "framer-motion";

type BlinkingCursorProps = {
  char?: string;
  className?: string;
};

export default function BlinkingCursor({
  char = "▊",
  className,
}: BlinkingCursorProps) {
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      }}
    >
      {char}
    </motion.span>
  );
}
