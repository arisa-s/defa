import { defineQuery } from "next-sanity";

export const homeQuery = defineQuery(`*[_type == "home"][0]{
  current,
  events,
  featuredVideo {
    title,
    thumbnail,
    "videoFile": videoFile.asset->url
  }
}`);
