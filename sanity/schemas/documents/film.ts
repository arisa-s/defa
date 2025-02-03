import { DocumentVideoIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const filmType = defineType({
  name: "film",
  title: "Film",
  icon: DocumentVideoIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "the last part of the URL (e.g. what-if-we-kiss => /film/what-if-we-kiss)",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description:
        "This ends up on summary pages, on Google, when people share your film on social media, etc.",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "video" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});

export default filmType;
