import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    loaded: false,
  });

  return (
    <div
      className={`overflow-hidden image-wrapper cursor-pointer border-2 bg-white border-white rounded-lg shadow-xl p-1 h-fit transition-colors duration-1000 ${
        noHower ? "" : "hover:border-black"
      } ${!imageSize.loaded ? "opacity-0" : "animate-image-loaded"} `}
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
            layout="intrinsic"
            objectFit="contain"
            onLoadingComplete={(target) => {
              if (!imageSize.loaded) console.log("!");
              setSmageSize({
                width: target.naturalWidth,
                height: target.naturalHeight,
                loaded: true,
              });
            }}
          />
        </Link>
      </div>
    </div>
  );
}
