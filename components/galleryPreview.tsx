import Link from "next/link";
import { GalleryData } from "../api_lib/imagesTypes";
import ImagePreview from "../components/imagePreview";

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
      className={`h-fit bg-gray-50 cursor-pointer rounded-lg shadow-xl transition-all duration-1000 ${
        noHower ? "" : "hover:shadow-focus hover:shadow-violet-900 "
      }`}
    >
      <Link href={`/gallery/${id}`}>
        <div>
          <h1 className={`text-center cursor-pointer text-lg font-bold`}>
            {name}
          </h1>
          <div
            className="flex flex-row justify-evenly gap-2 p-2 align-middle flex-wrap"
            style={{ maxWidth: width }}
          >
            {images
              .filter((_, index) => index < 4)
              .map((imageData) => (
                <ImagePreview
                  key={imageData.id}
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
