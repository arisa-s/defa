"use client";
import { Gallery } from "@/sanity.types";
import { FC, useState } from "react";
import DefaPhotoGallery from "../shared/DefaPhotoGallery";

export interface MultiGalleryProps {
  galleries: Gallery[];
}

export const MultiGallery: FC<MultiGalleryProps> = ({ galleries }) => {
  if (galleries.length === 0) {
    return <p>No galleries available</p>;
  }

  const [selected, setSelected] = useState(galleries[0]);

  return (
    <div className="flex w-full space-x-12 md:space-x-24">
      <div className="flex flex-col space-y-6 sticky top-0 my-12">
        {galleries.map((g) => (
          <button
            key={g.title}
            onClick={() => setSelected(g)}
            className={`text-lg md:text-2xl font-alternative ${selected == g && "text-2xl md:text-5xl"}`}
          >
            {g.title}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <DefaPhotoGallery images={selected.images} type={"grid"} />
      </div>
    </div>
  );
};

export default MultiGallery;
