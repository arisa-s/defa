"use client";

import { useState, useRef } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DefaPhotoGalleryProps } from "../DefaPhotoGallery";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

export default function DefaInlineCarousel({ images }: DefaPhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<Carousel>(null);
  const width = 1249;
  const height = 1740;

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    carouselRef.current?.goToSlide(Math.max(index));
  };

  return (
    <div className="mx-10 md:mx-24">
      {/* Main Content */}
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        draggable
        swipeable
        arrows={false}
        centerMode
        customTransition="transform 500ms ease-in-out"
        className="-mx-10 md:-mx-24"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:m-6 m-2 transition-all duration-500 ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-90 opacity-70"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              alt={image.alt || "Defa Image"}
              src={urlForImage(image).width(width).height(height).url()}
              width={width}
              height={height}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Carousel>

      {/* Bottom Row */}
      <div className="mt-8">
        <div className="tabular">
          <span>{currentIndex + 1}</span>/<span>{images.length}</span>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
          {/* Media Indexes */}
          <div className="flex flex-col">
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`text-sm tabular flex items-center gap-2 transition-colors ${
                  index === currentIndex
                    ? "text-primary font-medium"
                    : "text-tertiary"
                }`}
              >
                <span>{item.alt || item._key}</span>
                <span className="opacity-0">{item.alt || item._key}</span>
              </button>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 overflow-hidden transition-all duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-25"
                }`}
              >
                <Image
                  src={urlForImage(item)?.url() || ""}
                  alt={item.alt || item._key}
                  width={width}
                  height={height}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
