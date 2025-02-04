"use client";

import { FC } from "react";
import { decodeAssetId, urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const DefaGridGallery: FC<DefaPhotoGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images.map((image, index) => {
          if (!image.asset) return null;
          const {
            dimensions: { width, height },
          } = decodeAssetId(image.asset._ref);
          const postImageUrl = urlForImage(image)
            .width(width)
            .height(height)
            .url();
          return (
            <Image
              key={image._key}
              className="h-auto w-full"
              alt={image.alt || "Defa Image"}
              width={width}
              height={height}
              src={postImageUrl as string}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default DefaGridGallery;
