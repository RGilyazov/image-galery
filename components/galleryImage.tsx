import { ImageData } from "../api_lib/imagesTypes";

export default function GalleryImage({ imageData }: { imageData: ImageData }) {
  return (
    <div className="max-h-full w-full flex flex-col items-center content-center">
      <img
        className="max-h-[90vh] max-w-[90vw] object-contain"
        src={imageData.src}
      />
      <p>{imageData.description}</p>
    </div>
  );
}