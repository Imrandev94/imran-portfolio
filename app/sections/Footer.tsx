"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800/60">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <span
          className="text-xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
        >
          imrandev<sup className="text-xs not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
        </span>

        {/* Copyright */}
        <p className="text-sm text-gray-500 order-3 md:order-2">
          © 2025 Imrandev. Tous droits réservés.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm order-2 md:order-3">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Merci
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Confidentialité
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Conditions d&apos;utilisation
          </a>
        </div>
      </div>
    </footer>
  );
}
