import Image from "next/image";
import Link from "next/link";
import { ImageData } from "../api_lib/imagesTypes";

export default function ImagePreview({
  name,
  src,
  id,
  width,
  height,
  href,
}: {
  name: string;
  src: string;
  href: string;
  id: string;
  width: number;
  height: number;
}) {
  const result = (
    <div className="image-wrapper bg-white shadow-xl rounded-lg p-1 h-fit">
      <Link href={href}>
        <Image
          className="shadow-xl rounded-lg hover:opacity-70"
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
