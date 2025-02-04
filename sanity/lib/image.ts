import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource) => {
  return builder?.image(source).auto("format").fit("max");
};

export function resolveOpenGraphImage(image: any, width = 1200, height = 627) {
  if (!image) return;
  const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return { url, alt: image?.alt as string, width, height };
}

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const decodeAssetId = (id: string) => {
  // @ts-ignore
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions
    .split("x")
    .map((v: string) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
};
