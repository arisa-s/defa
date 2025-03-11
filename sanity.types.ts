/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Gallery = {
  _type: "gallery";
  title: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  display?: "stacked" | "inline" | "carousel";
  zoom?: boolean;
};

export type Video = {
  _type: "video";
  title?: string;
  thumbnail?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  videoFile?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  caption?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Film = {
  _id: string;
  _type: "film";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  label?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  slug: Slug;
  excerpt?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  videos?: Array<{
    _key: string;
  } & Video>;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  date: string;
  endDate?: string;
  excerpt?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  featured?: FeaturedImages;
  galleries?: Array<{
    _key: string;
  } & Gallery>;
};

export type FeaturedImages = {
  _type: "featuredImages";
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  display?: "stacked" | "inline" | "carousel";
  zoom?: boolean;
};

export type Publication = {
  _id: string;
  _type: "publication";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  previews?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  excerpt?: string;
  contributors?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  credits?: Array<{
    name?: string;
    creditType?: string;
    _key: string;
  }>;
  description?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | Gallery | Video | Settings | About | Film | SanityFileAsset | Project | FeaturedImages | Publication | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries/about.ts
// Variable: aboutQuery
// Query: *[_type == "about"][0]
export type AboutQueryResult = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
} | null;

// Source: ./sanity/lib/queries/film.ts
// Variable: filmQuery
// Query: *[_type == "film" && slug.current == $slug][0] {      _id,  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  description,  coverImage,  videos[] {    title,    thumbnail,    "videoFile": videoFile.asset->url,    caption  }  }
export type FilmQueryResult = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  videos: Array<{
    title: string | null;
    thumbnail: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    videoFile: string | null;
    caption: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
} | null;
// Variable: filmsQuery
// Query: *[_type == "film"] {     _id,  "title": coalesce(title, "Untitled"),  "slug": slug.current,  label,  excerpt,  description,  coverImage,  videos[] {    title,    thumbnail,    "videoFile": videoFile.asset->url,    caption  }  }
export type FilmsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  label: string | null;
  excerpt: string | null;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  videos: Array<{
    title: string | null;
    thumbnail: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    videoFile: string | null;
    caption: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
}>;

// Source: ./sanity/lib/queries/project.ts
// Variable: projectQuery
// Query: *[_type == "project" && slug.current == $slug] [0] {      content,        _id,  "title": coalesce(title, "Untitled"),  "slug": slug.current,  description,  excerpt,  coverImage,  date,  endDate,  galleries,  featured    }
export type ProjectQueryResult = {
  content: null;
  _id: string;
  title: string;
  slug: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  date: string;
  endDate: string | null;
  galleries: Array<{
    _key: string;
  } & Gallery> | null;
  featured: FeaturedImages | null;
} | null;
// Variable: projectsQuery
// Query: *[_type == "project"] {          _id,    "title": coalesce(title, "Untitled"),    "slug": slug.current,    excerpt,    coverImage,    date     }
export type ProjectsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  date: string;
}>;

// Source: ./sanity/lib/queries/publication.ts
// Variable: publicationQuery
// Query: *[_type == "publication" && slug.current == $slug] [0] {      content,        _id,  "title": coalesce(title, "Untitled"),  "slug": slug.current,  description,  excerpt,  previews,  coverImage,  contributors,  credits    }
export type PublicationQueryResult = {
  content: null;
  _id: string;
  title: string;
  slug: string;
  description: string | null;
  excerpt: string | null;
  previews: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  contributors: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  credits: Array<{
    name?: string;
    creditType?: string;
    _key: string;
  }> | null;
} | null;
// Variable: publicationsQuery
// Query: *[_type == "publication"] {          _id,    "title": coalesce(title, "Untitled"),    "slug": slug.current,    description,    excerpt,    coverImage,    previews,    credits     }
export type PublicationsQueryResult = Array<{
  _id: string;
  title: string;
  slug: string;
  description: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  previews: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  credits: Array<{
    name?: string;
    creditType?: string;
    _key: string;
  }> | null;
}>;

// Source: ./sanity/lib/queries/siteSetting.ts
// Variable: siteSettingsQuery
// Query: *[_type == "settings"][0]
export type SiteSettingsQueryResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
} | null;

// Source: ./app/(main)/film/[slug]/page.tsx
// Variable: filmSlugs
// Query: *[_type == "film" && defined(slug.current)]{"slug": slug.current}
export type FilmSlugsResult = Array<{
  slug: string;
}>;

// Source: ./app/(main)/project/[slug]/page.tsx
// Variable: projectSlugs
// Query: *[_type == "project" && defined(slug.current)]{"slug": slug.current}
export type ProjectSlugsResult = Array<{
  slug: string;
}>;

// Source: ./app/(main)/publication/[slug]/page.tsx
// Variable: publicationSlugs
// Query: *[_type == "publication" && defined(slug.current)]{"slug": slug.current}
export type PublicationSlugsResult = Array<{
  slug: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"about\"][0]": AboutQueryResult;
    "\n  *[_type == \"film\" && slug.current == $slug][0] {\n    \n  _id,\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  excerpt,\n  description,\n  coverImage,\n  videos[] {\n    title,\n    thumbnail,\n    \"videoFile\": videoFile.asset->url,\n    caption\n  }\n\n  }\n": FilmQueryResult;
    "\n  *[_type == \"film\"] {\n    \n _id,\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  label,\n  excerpt,\n  description,\n  coverImage,\n  videos[] {\n    title,\n    thumbnail,\n    \"videoFile\": videoFile.asset->url,\n    caption\n  }\n\n  }\n": FilmsQueryResult;
    "\n    *[_type == \"project\" && slug.current == $slug] [0] {\n      content,\n      \n  _id,\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  description,\n  excerpt,\n  coverImage,\n  date,\n  endDate,\n  galleries,\n  featured\n\n    }\n  ": ProjectQueryResult;
    "\n    *[_type == \"project\"] {\n      \n    _id,\n    \"title\": coalesce(title, \"Untitled\"),\n    \"slug\": slug.current,\n    excerpt,\n    coverImage,\n    date\n \n    }\n  ": ProjectsQueryResult;
    "\n    *[_type == \"publication\" && slug.current == $slug] [0] {\n      content,\n      \n  _id,\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  description,\n  excerpt,\n  previews,\n  coverImage,\n  contributors,\n  credits\n\n    }\n  ": PublicationQueryResult;
    "\n    *[_type == \"publication\"] {\n      \n    _id,\n    \"title\": coalesce(title, \"Untitled\"),\n    \"slug\": slug.current,\n    description,\n    excerpt,\n    coverImage,\n    previews,\n    credits\n \n    }\n  ": PublicationsQueryResult;
    "*[_type == \"settings\"][0]": SiteSettingsQueryResult;
    "*[_type == \"film\" && defined(slug.current)]{\"slug\": slug.current}": FilmSlugsResult;
    "*[_type == \"project\" && defined(slug.current)]{\"slug\": slug.current}": ProjectSlugsResult;
    "*[_type == \"publication\" && defined(slug.current)]{\"slug\": slug.current}": PublicationSlugsResult;
  }
}
