import Image from "next/image";
import { ImageData } from "../api_lib/imagesTypes";

export default function GalleryImage({ src, description }: ImageData) {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center content-start">
        <Image
          src={src}
          alt={description}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
    </>
  );
}
