"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export default function Marquee({
  items,
  direction = "left",
  speed = 30,
  className = "",
  itemClassName = "",
  separator = "·",
}: MarqueeProps) {
  // 2 copies + animate -50% = perfect seamless loop with zero gap
  const repeated = [...items, ...items];

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className={`flex items-center gap-8 shrink-0 ${itemClassName}`}>
            <span>{item}</span>
            <span className="text-gray-300">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
