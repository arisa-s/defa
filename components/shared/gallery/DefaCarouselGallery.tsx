"use client";

import { FC } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomLeftArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolutel left-0 right-1/2 top-0 bottom-0"
      aria-label="Previous Slide"
    ></button>
  );
};

const CustomRightArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 left-1/2 top-0 bottom-0"
      aria-label="Next Slide"
    ></button>
  );
};

const DefaCarouselGallery: FC<DefaPhotoGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) return null;
  const width = 1249;
  const height = 1740;

  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        arrows
      >
        {images.map((image) => {
          return (
            <div key={image._key} className="relative">
              <Image
                alt={image.alt || "Defa Image"}
                src={urlForImage(image).width(width).height(height).url()}
                width={width}
                height={height}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DefaCarouselGallery;
