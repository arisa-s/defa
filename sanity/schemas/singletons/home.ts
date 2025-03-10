import { defineField, defineType } from "sanity";
import { HomeIcon, InfoOutlineIcon } from "@sanity/icons";

export const homeType = defineType({
  name: "home",
  title: "Home Page",
  icon: HomeIcon,
  type: "document",
  fields: [
    defineField({
      name: "events",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "current",
      type: "string",
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
