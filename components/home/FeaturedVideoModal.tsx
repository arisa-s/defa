"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { VideoPlayer } from "../shared";

interface FeaturedVideo {
  title: string | null;
  thumbnail: SanityImageSource | null;
  videoFile: string;
}

export default function FeaturedVideoModal({
  featuredVideo,
}: {
  featuredVideo: FeaturedVideo;
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 flex items-end justify-end pb-60 pr-12 md:pb-24 md:pr-16 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-primary/50 backdrop-blur-md backdrop-filter border border-black rounded-lg p-2 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="text-sm uppercase hover:text-primary transition-colors ml-auto"
            >
              Close
            </button>

            <VideoPlayer
              thumbnail={featuredVideo.thumbnail}
              video={featuredVideo.videoFile}
              className="w-full max-w-[200px] md:max-w-xs p-6 md:p-12"
              isActive
            />
            <span className="flex items-center justify-between">
              <label className="text-sm uppercase text-secondary flex items-center gap-2">
                <div className="rounded-full bg-[#980000] w-2 h-2" />
                NOW PLAYING
              </label>
              <span>{featuredVideo.title}</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
