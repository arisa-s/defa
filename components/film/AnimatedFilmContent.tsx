"use client";

import { PortableText } from "next-sanity";
import { VideoPlayer } from "@/components/film";
import DefaHeader from "@/components/shared/DefaHeader";
import { SanityComponents } from "@/sanity/components";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FilmQueryResult } from "@/sanity.types";

interface AnimatedFilmContentProps {
  film: NonNullable<FilmQueryResult>;
}

export default function AnimatedFilmContent({
  film,
}: AnimatedFilmContentProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            if (entry.isIntersecting) {
              setActiveVideoIndex(index);
            } else if (activeVideoIndex === index) {
              setActiveVideoIndex(null);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeVideoIndex]);

  return (
    <div className="mx-auto px-5 max-w-7xl md:mb-60">
      <article className="space-y-12 md:space-y-24 lg:space-y-36">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 pt-12"
        >
          <DefaHeader>{film.title}</DefaHeader>
          {film.description?.length && (
            <div className="max-w-2xl mx-auto">
              <PortableText
                components={SanityComponents}
                value={film.description}
              />
            </div>
          )}
        </motion.div>

        <div className="flex flex-col space-y-32 md:space-y-48 lg:space-y-64">
          {film.videos?.map((video, index) => (
            <motion.div
              key={video.title}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col md:flex-row gap-8 justify-between items-start"
            >
              <VideoPlayer
                thumbnail={video.thumbnail!}
                video={video.videoFile!}
                className="w-full max-w-lg"
                isActive={activeVideoIndex === index}
              />
              <motion.div
                className="w-full md:w-1/3 space-y-4 sticky top-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                <h2 className="text-lg">{video.title}</h2>
                {video.caption?.length && (
                  <PortableText
                    components={SanityComponents}
                    value={video.caption}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </article>
    </div>
  );
}
