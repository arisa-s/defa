import { Image } from "next-sanity/image";
import Link from "next/link";
import { FC } from "react";

export interface ProjectCardProps {
  title: string;
  slug: string;
  imageUrl: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  slug,
  imageUrl,
}) => {
  return (
    <Link href={`/project/${slug}`}>
      <Image src={imageUrl} alt={title} width={500} height={500} />
    </Link>
  );
};

export default ProjectCard;
