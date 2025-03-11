"use client";
import { Gallery } from "@/sanity.types";
import { FC, useState } from "react";
import DefaPhotoGallery from "../shared/DefaPhotoGallery";

export interface MultiGalleryProps {
  galleries: Gallery[];
}

export const MultiGallery: FC<MultiGalleryProps> = ({ galleries }) => {
  const [selected, setSelected] = useState(galleries[0]);
  if (galleries.length === 0) {
    return <p>No galleries available</p>;
  }

  return (
    <div className="flex w-full space-x-12 md:space-x-24">
      {galleries.length > 1 ? (
        <div className="relative flex-shrink-0">
          <div className="sticky top-24 flex flex-col">
            {galleries.map((g) => (
              <button
                key={g.title}
                onClick={() => setSelected(g)}
                className={`uppercase text-left w-full border-b py-2 ${selected == g ? "text-primary" : "text-tertiary"}`}
              >
                {g.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <div className="max-w-7xl w-full mx-auto">
        {selected.images && (
          <DefaPhotoGallery images={selected.images} type={"grid"} />
        )}
      </div>
    </div>
  );
};

export default MultiGallery;
