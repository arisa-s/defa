import Image from "next/image";

export const Spinner = () => {
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
