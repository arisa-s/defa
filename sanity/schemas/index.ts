import { type SchemaTypeDefinition } from "sanity";
import { filmType, projectType, publicationType } from "./documents";
import { aboutType, siteSettingsType } from "./singletons";
import { videoType } from "./objects";

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
  ],
};
