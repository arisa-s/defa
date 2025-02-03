import { defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export const aboutType = defineType({
  name: "about",
  title: "About",
  icon: InfoOutlineIcon,
  type: "document",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
});
