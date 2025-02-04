import { Image } from "next-sanity/image";
import { FC } from "react";
import { DefaLink } from "../shared";

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
    <DefaLink href={`/project/${slug}`}>
      <Image src={imageUrl} alt={title} width={500} height={500} />
    </DefaLink>
  );
};

export default ProjectCard;
