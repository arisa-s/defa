import { PlayIcon } from "@sanity/icons";
import { validation } from "sanity";

export const videoType = {
  type: "object",
  name: "video",
  title: "Video",
  icon: PlayIcon,
  fields: [
    {
      title: "title",
      name: "title",
      type: "string",
    },
    {
      name: "thumbnail",
      type: "image",
      description: "Thumbnail image for the video",
    },
    {
      name: "videoFile",
      title: "Video File",
      type: "file",
      description: "Upload a video file",
      options: {
        accept: "video/*", // Allows only video file uploads
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "array",
      of: [{ type: "block" }],
      description: "Optional caption for the video",
    },
  ],
};

export default videoType;
