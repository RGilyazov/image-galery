import Image from "next/image";
import Link from "next/link";
import { ImageData } from "../api_lib/imagesTypes";

export default function ImagePreview({
  name,
  src,
  id,
  width,
  height,
  noHower,
  href,
}: {
  name: string;
  src: string;
  id: string;
  width: number;
  height: number;
  noHower?: boolean;
  href: string;
}) {
  const result = (
    <div
      className={`image-wrapper cursor-pointer border-2 bg-white border-white rounded-lg shadow-xl p-1 h-fit ${
        noHower ? "" : "hover:border-black"
      } `}
    >
      <Link href={href}>
        <Image
          className={`shadow-xl rounded-lg`}
          src={src}
          alt={name}
          width={width}
          height={height}
          layout="intrinsic"
        />
      </Link>
    </div>
  );
  return result;
}
