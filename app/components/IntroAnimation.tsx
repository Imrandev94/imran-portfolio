"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Resets on hard refresh, persists during client-side navigation
let introHasPlayed = false;

export function resetIntro() {
  introHasPlayed = false;
}

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!introHasPlayed) {
      introHasPlayed = true;
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#f5f5f5] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl text-black select-none"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            imrandev
            <sup
              className="text-sm not-italic"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              ®
            </sup>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
