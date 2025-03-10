import { defineQuery } from "next-sanity";

const publicationFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  description,
  excerpt,
  previews,
  coverImage,
  contributors,
  credits
`;

const publicationSummaryFields = /* groq */ `
    _id,
    "title": coalesce(title, "Untitled"),
    "slug": slug.current,
    description,
    excerpt,
    coverImage,
    previews,
    credits
 `;

export const publicationQuery = defineQuery(`
    *[_type == "publication" && slug.current == $slug] [0] {
      content,
      ${publicationFields}
    }
  `);

export const publicationsQuery = defineQuery(`
    *[_type == "publication"] {
      ${publicationSummaryFields}
    }
  `);
