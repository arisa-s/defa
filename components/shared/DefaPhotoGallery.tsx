import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "next-sanity/image";
import { FC } from "react";

export interface DefaPhotoGalleryProps {
  images: SanityImageSource[];
}

export const DefaPhotoGallery: FC<DefaPhotoGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {images?.map((image, index) => (
        <Image
          key={index}
          className="h-auto w-full"
          alt={"defa image"}
          width={1400}
          height={2000}
          src={urlForImage(image).url() as string}
        />
      ))}
    </div>
  );
};

export default DefaPhotoGallery;
