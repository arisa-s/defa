import { ImagesIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const featuredImagesType = {
  name: "featuredImages",
  type: "object",
  title: "Featured Images",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images?",
    }),
  ],
};

export default featuredImagesType;
