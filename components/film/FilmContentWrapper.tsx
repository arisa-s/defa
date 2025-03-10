"use client";

import { FilmQueryResult } from "@/sanity.types";
import dynamic from "next/dynamic";

const AnimatedFilmContent = dynamic(
  () => import("@/components/film/AnimatedFilmContent"),
  { ssr: false }
);

export interface FilmContentWrapperProps {
  film: FilmQueryResult;
}

export default function FilmContentWrapper({ film }: FilmContentWrapperProps) {
  return <AnimatedFilmContent film={film!} />;
}
