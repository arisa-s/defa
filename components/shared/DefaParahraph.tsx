import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface DefaParahraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  className?: string;
}

export const DefaParahraph: FC<DefaParahraphProps> = ({
  className,
  ...props
}) => {
  return <p className={`${className}`} {...props}></p>;
};

export default DefaParahraph;
