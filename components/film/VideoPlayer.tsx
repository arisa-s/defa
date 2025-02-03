"use client";
import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "next-sanity/image";
import { FC, useState } from "react";

export interface VideoPlayerProps {
  thumbnail: SanityImageSource;
  video: string;
  className?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  thumbnail,
  video,
  className,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {isPlaying ? (
        <video src={video} controls autoPlay className="w-full h-auto" />
      ) : (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail */}
          <Image
            src={urlForImage(thumbnail)?.height(450).width(800).url()}
            alt="Video thumbnail"
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-[#cfe2f3]/80 p-3 rounded-full shadow-lg">
              <svg
                className="w-12 h-12 text-[#980000]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
