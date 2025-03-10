import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const publicationType = defineType({
  name: "publication",
  title: "Publication",
  icon: BookIcon,
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
        "the last part of the URL (e.g. defa-2024 => /publication/defa-2024)",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "previews",
      title: "Preview",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description:
        "This ends up on summary pages, on Google, when people share your publication on social media, etc.",
    }),
    defineField({
      name: "contributors",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "credits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "creditType",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "description",
      type: "text",
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

export default publicationType;
