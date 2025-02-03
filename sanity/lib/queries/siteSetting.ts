import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`*[_type == "settings"][0]`);
