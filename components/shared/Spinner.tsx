import Image from "next/image";
import { FC } from "react";

export interface SpinnerProps {}

export const Spinner: FC<SpinnerProps> = ({}) => {
  return (
    <Image
      src="/logo.png"
      alt="Loading..."
      width={50}
      height={50}
      className="animate-spin"
    />
  );
};

export default Spinner;
