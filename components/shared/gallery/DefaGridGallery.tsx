"use client";

import { FC } from "react";
import { decodeAssetId, urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

const DefaGridGallery: FC<DefaPhotoGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
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
              className="relative h-auto w-full"
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
                <div className="group flex cursor-pointer absolute inset-0 items-center justify-center hover:bg-primary-bg/50 hover:backdrop-blur-md hover:backdrop-filter">
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
  );
};

export default DefaGridGallery;
