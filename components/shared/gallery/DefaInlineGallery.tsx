"use client";

import { FC } from "react";
import { urlForImage, decodeAssetId } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";

const DefaInlineGallery: FC<DefaPhotoGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-row h-96">
        {images.map((image) => {
          if (!image.asset) return null;
          const {
            dimensions: { width, height },
          } = decodeAssetId(image.asset._ref);
          const postImageUrl = urlForImage(image)
            .width(width)
            .height(height)
            .url();

          // Because we fix height to 1500, let's compute width proportionally:
          // ratio = width / height => newWidth = ratio * 1500
          const ratio = height !== 0 ? width / height : 1;
          const inlineWidth = ratio * 1500;

          return (
            <Image
              key={image._key}
              src={postImageUrl || ""}
              alt={image.alt || "Defa Image"}
              width={inlineWidth}
              height={1500}
              style={{ objectFit: "cover" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DefaInlineGallery;
