"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/constants";

export const YokoMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div
      className="fixed bottom-0 left-0 z-4 cursor-pointer"
      onClick={toggleMenu}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="relative">
        {/* Yoko image (clickable) */}
        <Image
          src="/yoko.png"
          alt="yoko thinking"
          width={907}
          height={1280}
          className="w-40 md:w-64"
        />

        {/* Speech Bubble and Arrow Container */}
        <div className="absolute top-16 md:top-36 right-12 md:right-16">
          <div className="relative">
            <AnimatePresence>
              <motion.div
                key="bubble"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  transformOrigin: "bottom left",
                }}
                animate={{
                  opacity: 1,
                  scale: isMenuOpen ? 1.2 : 0.8,
                  transformOrigin: "bottom left",
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                // Anchor the bubble’s bottom edge:
                className="absolute -bottom-1.5 left-0"
              >
                <div className="bg-primary rounded-md px-6 py-4 text-secondary border border-[#980000]">
                  {isMenuOpen ? (
                    <ul className="mt-2 space-y-1">
                      {LINKS.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block text-sm text-secondary hover:underline"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-base">Menu...</span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow fixed at the bottom of the wrapper */}
            <div className="absolute bottom-4">
              <div
                className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-0 h-0
                  border-r-[14px] border-r-[#980000]
                  border-y-[9px] border-y-transparent"
              />

              {/* Triangle (Tail) */}
              <div
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0
                  border-r-[14px] border-r-[#cfe2f3]
                  border-y-[9px] border-y-transparent"
              />
              {/* Outer triangle (border) */}
              {/* <div className="w-0 h-0 border-r-[15px] border-r-[#980000] border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /> */}
              {/* Inner triangle (fill) */}
              {/* <div className="absolute top-[1px] border-t-blue border-r-blue left-[1px] w-0 h-0 border-r-[14px] border-r-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YokoMenu;
