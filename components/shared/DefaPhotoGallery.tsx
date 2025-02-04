import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { FC } from "react";

export interface DefaPhotoGalleryProps {
  images:
    | {
        asset?:
          | {
              _ref: string;
              _type: "reference";
              _weak?: boolean | undefined;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset" | undefined;
            }
          | undefined;
        hotspot?: SanityImageHotspot | undefined;
        crop?: SanityImageCrop | undefined;
        alt?: string | undefined;
        _type: "image";
        _key: string;
      }[]
    | undefined;
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
