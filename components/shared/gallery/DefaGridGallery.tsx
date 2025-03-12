"use client";

import { FC, useState } from "react";
import { decodeAssetId, urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence, motion } from "framer-motion";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { SanityImage } from "@/sanity/lib/type";

interface DefaGridGalleryProps {
  images: {
    asset?:
      | {
          _ref: string;
          _type: "reference";
          _weak?: boolean | undefined;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined;
        }
      | undefined;
    hotspot?: SanityImageHotspot | undefined;
    crop?: SanityImageCrop | undefined;
    alt?: string | undefined;
    _type: "image";
    _key: string;
  }[];
}
const DefaGridGallery: FC<DefaGridGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<SanityImage | null>(null);
  if (!images || images.length === 0) return null;

  const handleImageClick = (image: SanityImage) => {
    setSelectedImage(image);
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3, 1200: 4 }}>
        <Masonry>
          {images.map((image) => {
            if (!image.asset) return null;
            const {
              dimensions: { width, height },
            } = decodeAssetId(image.asset._ref);
            const postImageUrl = urlForImage(image)
              .width(width)
              .height(height)
              .url();
            return (
              <motion.div
                key={image._key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="relative h-auto w-full cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  key={image._key}
                  className="h-auto w-full"
                  alt={image.alt || "Defa Image"}
                  width={width}
                  height={height}
                  src={postImageUrl as string}
                />
                {image.alt ? (
                  <div className="group flex absolute inset-0 items-center justify-center hover:bg-primary-bg/50 hover:backdrop-blur-md hover:backdrop-filter">
                    <p className="text-transparent group-hover:text-primary">
                      {image.alt}
                    </p>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {/* Modal for mobile image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-12 right-6 text-white z-50"
            >
              CLOSE
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-[80vh] max-w-5xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={urlForImage(selectedImage).url()}
                  alt={selectedImage.alt || "Gallery image"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </motion.div>
            {selectedImage.alt ? (
              <span className="text-white absolute bottom-12 right-6">
                {selectedImage.alt}
              </span>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DefaGridGallery;
