import { ProjectsIcon } from "@sanity/icons";
import { format, parseISO } from "date-fns";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  icon: ProjectsIcon,
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
        "The last part of the URL (e.g. defa-2024 => /project/defa-2024)",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image (eg. poster)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: undefined,
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      description: "(Optional for one-time events)",
      type: "datetime",
      initialValue: undefined,
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description:
        "This ends up on summary pages, on Google, when people share your event on social media, etc.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "galleries",
      title: "Photo Galleries",
      type: "array",
      of: [{ type: "gallery" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "coverImage",
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" ") };
    },
  },
});

export default projectType;
