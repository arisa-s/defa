import { defineQuery } from "next-sanity";

export const aboutQuery = defineQuery(`*[_type == "about"][0]`);
