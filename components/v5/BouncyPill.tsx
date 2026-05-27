"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type BouncyPillProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
} & Omit<HTMLMotionProps<"a">, "children">;

export default function BouncyPill({
  children,
  href = "#",
  className,
  target,
  rel,
  style,
  ...rest
}: BouncyPillProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
