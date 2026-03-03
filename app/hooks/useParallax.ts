"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useParallax(yRange: [string, string] = ["5%", "-5%"]) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  return { ref, y };
}
