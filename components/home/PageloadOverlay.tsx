"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PageloadOverlay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second load; replace with your real data/route logic
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-overlay"
          // Fade out the entire overlay
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Glassmorphism background (behind the image) */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

          {/* Image with fade, zoom, pause, and spin */}
          <motion.img
            src="/logo.png"
            key="loader"
            className="relative z-10 h-96"
            variants={{
              // Start hidden, tiny, and unrotated
              initial: { opacity: 0, scale: 0.1, rotate: 0 },

              // 1) Fade+zoom in
              // 2) Pause
              // 3) Spin
              animate: {
                // 4 keyframes for each property
                opacity: [0, 1, 1, 1],
                scale: [0.1, 1, 1, 1],
                rotate: [0, 0, 0, 720],
                transition: {
                  duration: 4, // total length of this "animate" sequence
                  times: [0, 0.2, 0.3, 1],
                  ease: "easeInOut",
                },
              },

              // Fade out & upscale while still spinning
              exit: {
                opacity: 0,
                scale: 5,
                rotate: 1440, // extra spins on exit
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageloadOverlay;
