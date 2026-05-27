"use client";

import { motion } from "framer-motion";

export default function Crt() {
  return (
    <div
      className="bg-v6-ink"
      style={{
        padding: 18,
        borderRadius: 24,
        boxShadow:
          "inset 0 0 0 4px #f0e5cf, inset 0 0 0 8px #3a1f0d, 0 16px 0 #8b3a0a",
      }}
    >
      {/* Screen */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, #2d6b6b 0%, #3a1f0d 90%)",
          borderRadius: 18,
          aspectRatio: "4 / 3",
          padding: 24,
          color: "#9cffce",
          fontFamily: "var(--font-vt323), monospace",
          fontSize: 20,
          lineHeight: 1.25,
        }}
        animate={{ opacity: [1, 0.97, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div style={{ marginBottom: 12 }}>READY.</div>
        <div>LOAD &quot;PORTFOLIO&quot;,8,1</div>
        <div>SEARCHING FOR PORTFOLIO</div>
        <div>LOADING</div>
        <div>READY.</div>
        <div>
          RUN
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
          >
            █
          </motion.span>
        </div>

        {/* Animated scanlines */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)",
          }}
          animate={{ backgroundPositionY: ["0px", "8px"] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Soft inner screen glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow:
              "inset 0 0 60px rgba(0,0,0,0.55), inset 0 0 12px rgba(156,255,206,0.08)",
            borderRadius: 18,
          }}
        />
      </motion.div>

      {/* Indicator lights */}
      <div className="mt-[14px] flex justify-around">
        <span className="block h-3 w-3 rounded-full bg-v6-orange" />
        <span className="block h-3 w-3 rounded-full bg-v6-mustard" />
        <span className="block h-3 w-3 rounded-full bg-v6-teal" />
      </div>
    </div>
  );
}
