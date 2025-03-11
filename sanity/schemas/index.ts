import { type SchemaTypeDefinition } from "sanity";
import { filmType, projectType, publicationType } from "./documents";
import { aboutType, siteSettingsType } from "./singletons";
import { featuredImagesType, videoType } from "./objects";
import { galleryType } from "./objects/gallery";
import { homeType } from "./singletons/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    publicationType,
    projectType,
    filmType,
    // singletons
    aboutType,
    siteSettingsType,
    homeType,
    // objects
    videoType,
    galleryType,
    featuredImagesType,
  ],
};
