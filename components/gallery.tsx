import ImagePreview from "./imagePreview";
import { GalleryData, ImageData } from "../api_lib/imagesTypes";
import Head from "next/head";

export default function Gallery({ name, description, images }: GalleryData) {
  const result = (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <span>
        <h1 className="text-lg font-bold">{name}</h1>
        <h2 className="text-sm text-gray-500">
          {images.length} images in the gallery
        </h2>
      </span>
      <ul className="flex-grow flex flex-row justify-evenly flex-wrap border-2 gap-2 p-2 bg-yellow-50">
        {images.map((imageData: ImageData) => (
          <li key={imageData.id}>
            <ImagePreview
              width={300}
              height={300}
              noMaxWidth
              {...imageData}
            ></ImagePreview>
          </li>
        ))}
      </ul>
      <h2 className="mt-2 mb-2 text-sm text-gray-500">{description}</h2>
    </>
  );
  return result;
}
