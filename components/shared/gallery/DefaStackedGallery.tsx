"use client";

import React, { FC, useState } from "react";
import { decodeAssetId, urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";
import DefaHeader from "../DefaHeader";

const DefaStackedGallery: FC<DefaPhotoGalleryProps> = ({
  images,
  hideTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  if (!currentImage.asset) return null;

  const {
    dimensions: { width, height },
  } = decodeAssetId(currentImage.asset._ref);
  const postImageUrl = urlForImage(currentImage)
    .width(width)
    .height(height)
    .url();

  if (!images || images.length === 0) return null;
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {hideTitle ? null : <DefaHeader type="h3">Stacked Gallery</DefaHeader>}
      <div className="relative">
        <Image
          alt={currentImage.alt || "Defa Image"}
          src={postImageUrl || ""}
          width={width}
          height={height}
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default DefaStackedGallery;
