"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PageloadOverlay = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true"); // Mark as visited for this session

      // Simulate a 3-second load; replace with your real data/route logic
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

          <motion.img
            src="/logo.png"
            key="loader"
            className="relative z-10 h-52 md:h-96"
            variants={{
              initial: { opacity: 0, scale: 0.1, rotate: 0 },
              animate: {
                opacity: [0, 1, 1, 1],
                scale: [0.1, 1, 1, 1],
                rotate: [0, 0, 0, 720],
                transition: {
                  duration: 4,
                  times: [0, 0.2, 0.3, 1],
                  ease: "easeInOut",
                },
              },
              exit: {
                opacity: 0,
                scale: 5,
                rotate: 1440,
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
