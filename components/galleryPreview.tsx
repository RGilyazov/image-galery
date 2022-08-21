import { GalleryData } from "../api_lib/imagesTypes";
import ImagePreview from "../components/imagePreview";
import Link from "next/link";

export default function GalleryPreview({
  width,
  height,
  noHower,
  id,
  name,
  images,
}: {
  width: number;
  height: number;
  noHower?: boolean;
} & GalleryData) {
  const result = (
    <div
      className={`h-fit bg-white border-2 cursor-pointer rounded-lg ${
        noHower ? "" : "hover:border-black"
      }`}
    >
      <Link href={`/gallery/${id}`}>
        <div>
          <h1
            className={`text-center cursor-pointer text-lg font-bold ${
              noHower ? "" : "hover:underline"
            }`}
          >
            {name}
          </h1>
          <div
            className="flex flex-row justify-evenly gap-2 p-2 align-middle flex-wrap"
            style={{ width: width, height: height }}
          >
            {images
              .filter((_, index) => index < 4)
              .map((imageData) => (
                <ImagePreview
                  noHower
                  width={width / 2 - 30}
                  height={height / 2 - 30}
                  name={imageData.name}
                  src={imageData.src}
                  href={`/gallery/${id}`}
                  id={imageData.id}
                ></ImagePreview>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
  return result;
}
