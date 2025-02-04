import { type SchemaTypeDefinition } from "sanity";
import { filmType, projectType, publicationType } from "./documents";
import { aboutType, siteSettingsType } from "./singletons";
import { featuredImagesType, videoType } from "./objects";
import { galleryType } from "./objects/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    publicationType,
    projectType,
    filmType,
    // singletons
    aboutType,
    siteSettingsType,
    // objects
    videoType,
    galleryType,
    featuredImagesType,
  ],
};
