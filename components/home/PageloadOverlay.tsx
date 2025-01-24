"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PageloadOverlay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second load; replace with your real data/route logic
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        // Parent container for overlay
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

          {/* Spinning logo (in front of the glass effect) */}
          <motion.img
            src="/logo.png"
            key="loader"
            className="relative z-10 h-96 animate-spin"
            // You can still add individual transitions to the image if desired
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageloadOverlay;
