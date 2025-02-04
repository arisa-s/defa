import { Gallery } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { FC } from "react";

export interface DefaPhotoGalleryProps {
  gallery: Gallery;
}

export const DefaPhotoGallery: FC<DefaPhotoGalleryProps> = ({ gallery }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {gallery.images?.map((image, index) => (
        <Image
          key={index}
          className="h-auto w-full"
          alt={image.alt || "defa image"}
          width={1400}
          height={2000}
          src={urlForImage(image).url() as string}
        />
      ))}
    </div>
  );
};

export default DefaPhotoGallery;
