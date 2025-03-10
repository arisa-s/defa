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
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function DefaInlineCarousel({ images }: DefaPhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<Carousel>(null);
  const width = 1249;
  const height = 1740;

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    carouselRef.current?.goToSlide(index);
  };

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={``}>
      {/* Main Content */}
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        draggable
        swipeable
        arrows={false}
        afterChange={handleCarouselChange}
        centerMode
        className="-mx-24"
      >
        {images.map((image, index) => (
          <div key={index} className="md:m-6 m-2">
            <Image
              alt={image._key || "Defa Image"}
              src={urlForImage(image).width(width).height(height).url()}
              width={width}
              height={height}
            />
          </div>
        ))}
      </Carousel>

      {/* Bottom Row */}
      <div>
        <div className="tabular">
          <span>{currentIndex + 1}</span>/<span>{images.length}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          {/* Media Indexes */}
          <div className="flex flex-col gap-1">
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`text-sm tabular flex items-center gap-2 transition-colors ${
                  index === currentIndex ? "text-gray-900" : "text-gray-400"
                }`}
              >
                <span>{item._key}</span>
                <span className="opacity-0">{item._key}</span>
              </button>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 h-16 overflow-hidden transition-opacity ${
                  index === currentIndex ? "opacity-100" : "opacity-25"
                }`}
              >
                <Image
                  src={urlForImage(item)?.url() || ""}
                  alt={item._key || ""}
                  width={64}
                  height={64}
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
