import { defineQuery } from "next-sanity";

const projectFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  description,
  excerpt,
  coverImage,
  date,
  endDate,
  galleries
`;

const projectSummaryFields = /* groq */ `
    _id,
    "title": coalesce(title, "Untitled"),
    "slug": slug.current,
    excerpt,
    coverImage,
 `;

export const projectQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug] [0] {
      content,
      ${projectFields}
    }
  `);

export const projectsQuery = defineQuery(`
    *[_type == "project"] {
      ${projectSummaryFields}
    }
  `);
