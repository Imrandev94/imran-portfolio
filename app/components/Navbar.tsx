"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Projets", href: "/projets" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
];

// Text size decreases with each link
const linkSizes = [
  "text-4xl sm:text-6xl md:text-8xl",
  "text-3xl sm:text-5xl md:text-7xl",
  "text-2xl sm:text-4xl md:text-6xl",
  "text-xl sm:text-3xl md:text-5xl",
  "text-lg sm:text-2xl md:text-4xl",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/*
          Blur backdrop: separate absolute div so the gradient mask only affects
          the background layer — not the logo/button above it.
          Fades to transparent at the bottom → no hard cut line when scrolling.
        */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: scrolled ? 1 : 0,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(245,245,245,0.88)",
            WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
          }}
        />

        {/* Header — aligned with content columns */}
        <div className="relative max-w-[1520px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-2xl text-black"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            imrandev<sup className="text-xs not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
          </Link>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen((o) => !o)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm text-sm font-medium hover:bg-white transition-colors"
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? "Fermer" : "Menu"}
            </motion.span>
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#f5f5f5] flex flex-col items-center justify-center"
          >
            {/* Top bar — same alignment as navbar */}
            <div className="absolute top-0 left-0 right-0 max-w-[1520px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
              <div
                className="text-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                imrandev<sup className="text-xs not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm text-sm font-medium hover:bg-white transition-colors"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Fermer
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  animate={{ rotate: 180 }}
                >
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.button>
            </div>

            {/* Links — decreasing size + bounce on tap */}
            <div className="flex flex-col items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{
                    // Entry/exit uses ease curve
                    y: { duration: 0.3, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
                    // Hover slide uses spring
                    x: { type: "spring", stiffness: 400, damping: 20 },
                    // Tap uses low-damping spring → bounces back on release
                    scale: { type: "spring", stiffness: 500, damping: 10 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block ${linkSizes[i]} font-bold text-black py-1`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="absolute bottom-8 text-sm text-gray-400">
              © 2025 Imrandev®
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
