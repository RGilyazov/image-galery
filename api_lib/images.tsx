import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { ImageData, GalleryData } from "./imagesTypes";

const imagesDirectory = path.join(
  process.cwd(),
  "externalImageLibraryData/images"
);

function getIdFromFileName(fileName: string): string {
  return fileName.replace(/\.jpg$/, "");
}

export function getAllImagesIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(imagesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: getIdFromFileName(fileName),
      },
    };
  });
}

export async function getImageData(
  id: string
): Promise<{ id: string; imageData: ImageData }> {
  const fileName = `${id}.jpg`;
  const imageData: ImageData = {
    id: id,
    src: `/api/externalImageLibrary/images/${fileName}`,
    name: fileName,
    description: fileName,
    href: `/image/${id}`,
  };
  return {
    id,
    imageData,
  };
}

export function getAllImagesData(): ImageData[] {
  const fileNames = fs.readdirSync(imagesDirectory);
  const allImagesData = fileNames.map((fileName) => {
    const id = getIdFromFileName(fileName);
    return {
      id: id,
      src: `/api/externalImageLibrary/images/${fileName}`,
      name: fileName,
      description: fileName,
      href: `/image/${id}`,
    };
  });
  return allImagesData;
}

function getImageDataFromId(id: string): ImageData {
  const fileName = `${id}.jpg`;
  const imageData: ImageData = {
    id: id,
    src: `/api/externalImageLibrary/images/${fileName}`,
    name: fileName,
    description: fileName,
    href: `/image/${id}`,
  };
  return imageData;
}

function getImageDataFromArray(ids: string[]): ImageData[] {
  return ids.map((imageID: string) => getImageDataFromId(imageID));
}

export async function getGalleryData(galleryId: string): Promise<GalleryData> {
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = await fsPromises.readFile(
    filePath + "/gallery.json",
    "utf8"
  );
  const objectData = JSON.parse(jsonData);
  if (galleryId in objectData) {
    const gallery = objectData[galleryId];
    gallery.images = getImageDataFromArray(gallery.images);
    return gallery;
  } else return Promise.reject(`gallery ${galleryId} not found`);
}

export async function gatAllGalleriesData(): Promise<GalleryData[]> {
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = await fsPromises.readFile(
    filePath + "/gallery.json",
    "utf8"
  );
  const galleryData = JSON.parse(jsonData);
  const res = [];
  for (const key of Object.keys(galleryData)) {
    galleryData[key].images = getImageDataFromArray(galleryData[key].images);
    res.push({ id: key, ...galleryData[key] });
  }

  return res;
}
