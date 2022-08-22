import Head from "next/head";
import { GalleryData, ImageData } from "../api_lib/imagesTypes";
import ImagePreview from "./imagePreview";

export default function Gallery({ name, description, images }: GalleryData) {
  const result = (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="text-left flex-wrap border-2 rounded-lg mt-1 mb-1 bg-gray-50">
        <h1 className="text-lg font-bold mt-2 mb-2 ml-2 ">{name}</h1>
        <h2 className="text-sm text-gray-500 mt-2 mb-2 ml-2 ">
          {images.length} images in this gallery
        </h2>
      </div>
      <div className="text-left flex-wrap border-2 rounded-lg mt-1 mb-2 bg-gray-50">
        <h2 className="text-sm text-gray-500 mt-2 mb-2 ml-2 ">{description}</h2>
      </div>
      <ul className="flex-grow flex flex-row justify-evenly flex-wrap border-2 rounded-lg gap-2 p-2 bg-gray-50">
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
    </>
  );
  return result;
}
