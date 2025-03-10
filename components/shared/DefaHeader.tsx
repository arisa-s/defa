import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface DefaHeaderProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  className?: string;
  /**
   * Heading type to render. Defaults to "h1".
   */
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const DefaHeader: FC<DefaHeaderProps> = ({
  className = "",
  type = "h1",
  ...props
}) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`
            text-balance
            md:text-lg md:leading-none font-accent
            ${className}
          `}
          {...props}
        />
      );
    case "h2":
      return (
        <h2
          className={`
            text-balance mb-8 text-3xl font-semibold leading-tight tracking-tight
            md:text-4xl md:leading-tight font-accent
            ${className}
          `}
          {...props}
        />
      );
    case "h3":
      return (
        <h3
          className={`
            text-balance mb-6 text-2xl font-semibold leading-snug
            md:text-3xl md:leading-snug font-accent
            ${className}
          `}
          {...props}
        />
      );
    case "h4":
      return (
        <h4
          className={`
            text-balance mb-4 text-xl font-semibold leading-snug
            md:text-2xl font-accent
            ${className}
          `}
          {...props}
        />
      );
    case "h5":
      return (
        <h5
          className={`
            text-balance mb-3 text-lg font-medium leading-snug
            md:text-xl font-accent
            ${className}
          `}
          {...props}
        />
      );
    case "h6":
      return (
        <h6
          className={`
            text-balance mb-2 text-base font-medium leading-tight
            md:text-base font-accent
            ${className}
          `}
          {...props}
        />
      );
  }
};

export default DefaHeader;
