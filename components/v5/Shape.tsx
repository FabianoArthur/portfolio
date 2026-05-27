"use client";

import { motion } from "framer-motion";

type ShapeProps = {
  className?: string;
  style?: React.CSSProperties;
  float?: boolean;
  duration?: number;
  rotate?: number;
};

export default function Shape({
  className,
  style,
  float = true,
  duration = 5,
  rotate = 0,
}: ShapeProps) {
  if (!float) {
    return <div className={className} style={style} />;
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ rotate }}
      animate={{ y: [-4, 4, -4], rotate }}
      transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
    />
  );
}
