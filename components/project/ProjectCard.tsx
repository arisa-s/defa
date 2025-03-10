"use client";
import { Image } from "next-sanity/image";
import { FC, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  projectNumber: string;
  selected?: boolean;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageUrl,
  projectNumber,
  selected,
}) => {
  const [showImage, setShowImage] = useState(false);
  const [canShowText, setCanShowText] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCanShowText(false);
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowImage(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:hidden py-2">
        <span>{projectNumber}</span>
        <h2>{title}</h2>
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-40 md:h-60 lg:h-72 space-y flex-col cursor-pointer hidden md:flex py-2 px-3"
      >
        <span>{projectNumber}</span>

        <AnimatePresence mode="wait">
          {showImage || selected ? (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onAnimationComplete={() => setCanShowText(true)}
              className="flex relative w-full h-full"
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 300px"
                className="w-full mb-auto"
              />
            </motion.div>
          ) : canShowText ? (
            <motion.p
              key="text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {title}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectCard;
