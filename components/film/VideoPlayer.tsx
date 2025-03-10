"use client";
import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "next-sanity/image";
import { FC, useState, useEffect, useRef } from "react";

export interface VideoPlayerProps {
  thumbnail: SanityImageSource;
  video: string;
  className?: string;
  isActive?: boolean;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  thumbnail,
  video,
  className,
  isActive = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAttemptedPlay = useRef(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const playVideo = async () => {
      try {
        if (isActive && !hasAttemptedPlay.current) {
          hasAttemptedPlay.current = true;
          await videoRef.current!.play();
          setIsPlaying(true);
        } else if (!isActive) {
          videoRef.current!.pause();
          setIsPlaying(false);
          hasAttemptedPlay.current = false;
        }
      } catch (error) {
        console.log("Auto-play prevented:", error);
        setIsPlaying(false);
      }
    };

    playVideo();
  }, [isActive]);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Play prevented:", error);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {isPlaying || isActive ? (
        <video
          ref={videoRef}
          src={video}
          controls
          playsInline
          muted
          className="w-full h-auto"
        />
      ) : (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          {/* Thumbnail */}
          <Image
            src={urlForImage(thumbnail)?.height(450).width(800).url()}
            alt="Video thumbnail"
            width={800}
            height={450}
            className="w-full h-auto opacity-50"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-[#cfe2f3]/80 p-3 rounded-full shadow-lg">
              <svg
                className="w-12 h-12 text-primary"
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
