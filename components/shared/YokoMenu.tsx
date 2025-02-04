"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/constants";

export const YokoMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* 1) Yoko + Speech Bubble at Bottom-Left */}
      <div className="fixed bottom-0 left-0 w-64 z-40">
        <div className="relative">
          {/* Yoko image (clickable) */}
          <Image
            src="/yoko.png"
            alt="yoko thinking"
            width={907}
            height={1280}
            className="w-40 md:w-64 cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Speech Bubble (also clickable) */}
          <div
            className="absolute top-10 md:top-16 right-20 md:right-10 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="relative bg-white rounded-lg px-4 pb-2 pt-1 shadow-md text-black">
              <span className="text-base">wip</span>
              <div
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0
                  border-r-[12px] border-r-white
                  border-y-[8px] border-y-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2) Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="glass-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0
              flex flex-col items-center justify-center
              bg-white/50 backdrop-blur-md
              z-50
            "
          >
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 px-3 py-1 text-xl
                         transition"
            >
              close
            </button>

            <nav className="flex flex-col items-center gap-6">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-primary text-lg md:text-2xl hover:underline"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YokoMenu;
