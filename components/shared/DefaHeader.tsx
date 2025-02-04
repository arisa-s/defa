import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface DefaHeaderProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const DefaHeader: FC<DefaHeaderProps> = ({
  className,
  type = "h1",
  ...props
}) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`text-balance mb-12 text-4xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl ${className}`}
          {...props}
        />
      );
    case "h2":
      return <h2 className={`${className}`} {...props} />;
    case "h3":
      return <h3 className={`${className}`} {...props} />;
    case "h4":
      return <h4 className={`${className}`} {...props} />;
    case "h5":
      return <h5 className={`${className}`} {...props} />;
    case "h6":
      return <h6 className={`${className}`} {...props} />;
  }
};

export default DefaHeader;
