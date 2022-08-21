import { ImageData } from "../api_lib/imagesTypes";
import ImagePreview from "../components/imagePreview";
import Link from "next/link";

export default function GalleryPreview({
  width,
  height,
  id,
  name,
  description,
  images,
}: {
  width: number;
  height: number;
  id: string;
  name: string;
  description: string;
  images: ImageData[];
}) {
  const result = (
    <div className="bg-white hover:opacity-70 border-2 rounded-lg">
      <Link href={`/gallery/${id}`}>
        <div
          className="flex flex-row justify-evenly gap-2 p-2 align-middle flex-wrap"
          style={{ width: width, height: height }}
        >
          {images
            .filter((_, index) => index < 4)
            .map((imageData) => (
              <ImagePreview
                width={width / 2 - 30}
                height={height / 2 - 30}
                name={imageData.name}
                src={imageData.src}
                href={`/gallery/${id}`}
                id={imageData.id}
              ></ImagePreview>
            ))}
        </div>
      </Link>
    </div>
  );
  return result;
}
