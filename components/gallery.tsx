import ImagePreview from "./imagePreview";
import { GalleryData } from "../api_lib/imagesTypes";
import Head from "next/head";

export default function Gallery({ name, description, images }: GalleryData) {
  const result = (
    <div>
      <section className="-h-full -w-full">
        <Head>
          <title>{name}</title>
        </Head>
        <section>
          <h1 className="text-lg font-bold">{name}</h1>
          <p>{description}</p>
        </section>
        <h2 className="text-red-600">{images.length} images in the gallery</h2>
        <ul className="flex flex-row justify-evenly flex-wrap border-2 gap-2 p-2 bg-yellow-50">
          {images.map((imageData) => (
            <li>
              <ImagePreview
                width={300}
                height={300}
                name={imageData.name}
                src={imageData.src}
                id={imageData.id}
                href={imageData.href}
              ></ImagePreview>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
  return result;
}
