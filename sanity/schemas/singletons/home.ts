import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homeType = defineType({
  name: "home",
  title: "Home Page",
  icon: HomeIcon,
  type: "document",
  fields: [
    defineField({
      name: "events",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "current",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featuredVideo",
      type: "video",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "home",
      };
    },
  },
});
