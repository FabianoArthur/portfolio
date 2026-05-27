"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  className?: string;
  itemClassName?: string;
  repetitions?: number;
};

export default function Marquee({
  children,
  duration = 20,
  className,
  itemClassName,
  repetitions = 6,
}: MarqueeProps) {
  const items = Array.from({ length: repetitions });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First copy */}
        <div className="inline-flex shrink-0">
          {items.map((_, i) => (
            <span key={`a-${i}`} className={itemClassName}>
              {children}
            </span>
          ))}
        </div>
        {/* Duplicate copy for seamless loop */}
        <div className="inline-flex shrink-0" aria-hidden="true">
          {items.map((_, i) => (
            <span key={`b-${i}`} className={itemClassName}>
              {children}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
