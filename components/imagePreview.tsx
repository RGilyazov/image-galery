import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ImagePreview({
  name,
  src,
  id,
  width,
  height,
  noHower,
  noMaxWidth,
  href,
}: {
  name: string;
  src: string;
  id: string;
  width: number;
  height: number;
  noHower?: boolean;
  noMaxWidth?: boolean;
  href: string;
}) {
  const [imageSize, setSmageSize] = useState({
    width: width,
    height: height,
  });

  return (
    <div
      className={`overflow-hidden image-wrapper cursor-pointer border-2 bg-white border-white rounded-lg shadow-xl p-1 h-fit duration-500 ${
        noHower ? "" : "hover:border-black"
      } `}
    >
      <div
        style={{ maxWidth: noMaxWidth ? "100%" : width, maxHeight: height }}
        className={`overflow-hidden  rounded-lg`}
      >
        <Link href={href}>
          <Image
            className={`shadow-xl rounded-lg`}
            src={src}
            alt={name}
            width={(imageSize.width * height) / imageSize.height}
            height={height}
            onLoadingComplete={(target) => {
              setSmageSize({
                width: target.naturalWidth,
                height: target.naturalHeight,
              });
            }}
            layout="intrinsic"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
        </Link>
      </div>
    </div>
  );
}
