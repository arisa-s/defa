import { defineQuery } from "next-sanity";

const filmFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  description,
  coverImage,
  videos[] {
    title,
    thumbnail,
    "videoFile": videoFile.asset->url,
    caption
  },
  publishedAt
`;

export const filmQuery = defineQuery(`
  *[_type == "film" && slug.current == $slug] [0] {
    ${filmFields}
  }
`);

export const filmsQuery = defineQuery(`
  *[_type == "film"] | order(publishedAt desc) {
    ${filmFields}
  }
`);
