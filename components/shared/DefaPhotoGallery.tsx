"use client";

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { FC } from "react";
import DefaCarouselGallery from "./gallery/DefaCarouselGallery";
import DefaInlineGallery from "./gallery/DefaInlineGallery";
import DefaGridGallery from "./gallery/DefaGridGallery";
import DefaStackedGallery from "./gallery/DefaStackedGallery";

export interface DefaPhotoGalleryProps {
  images: {
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
  }[];
  type?: "carousel" | "stacked" | "inline" | "grid";
  hideTitle?: boolean;
}

export const DefaPhotoGallery: FC<DefaPhotoGalleryProps> = ({ ...props }) => {
  switch (props.type) {
    case "carousel":
      return <DefaCarouselGallery {...props} />;
    case "inline":
      return <DefaInlineGallery {...props} />;
    case "grid":
      return <DefaGridGallery {...props} />;
    case "stacked":
      return <DefaStackedGallery {...props} />;
    default:
      return <DefaGridGallery {...props} />;
  }
};

export default DefaPhotoGallery;
