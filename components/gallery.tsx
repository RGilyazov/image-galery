import Head from "next/head";
import { GalleryData, ImageData } from "../api_lib/imagesTypes";
import ImagePreview from "./imagePreview";

export default function Gallery({ name, description, images }: GalleryData) {
  const result = (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="rounded-lg mb-2 bg-white shadow-xl pl-2 pb-2 pr-2 flex flex-grow">
        <div className="rounded-lg mb-2 bg-transparent shadow-inner p-2 flex flex-grow  flex-col">
          <div className="text-left flex-wrap rounded-lg mb-1 bg-white shadow-xl">
            <h1 className="text-lg font-bold mt-1 mb-2 ml-2 ">{name}</h1>
            <h2 className="text-xs text-gray-500 mt-2 mb-2 ml-2 ">
              {images.length} images in this gallery
            </h2>
            <h2 className="text-sm text-gray-500 mt-2 mb-2 ml-2 ">
              {description}
            </h2>
          </div>
          <ul className="flex-grow flex flex-row justify-evenly flex-wrap gap-2">
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
        </div>
      </div>
    </>
  );
  return result;
}
