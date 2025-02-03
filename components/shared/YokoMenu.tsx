"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // If you want Next.js-style links

export const YokoMenu = () => {
  // State to track whether the menu overlay is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the menu overlay
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
            // Framer Motion animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // adjust speed to preference
            className="
              fixed inset-0
              flex flex-col items-center justify-center
              bg-white/30 backdrop-blur-sm
              z-50
            "
          >
            {/* Close button or X icon */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold
                          px-3 py-1
                         transition"
            >
              X
            </button>

            <nav className="flex flex-col items-center gap-6">
              {/* Replace these with your actual links */}
              <Link
                href="/"
                className="text-2xl text-black hover:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl text-black hover:underline"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/project"
                className="text-2xl text-black hover:underline"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href="/publication"
                className="text-2xl text-black hover:underline"
                onClick={toggleMenu}
              >
                Publications
              </Link>
              <Link
                href="/film"
                className="text-2xl text-black hover:underline"
                onClick={toggleMenu}
              >
                Films
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YokoMenu;
