import fs from "fs";
import path from "path";
import { ImageData, GalleryData } from "./imagesTypes";

const IMAGES_DIRECTORY = path.join(
  process.cwd(),
  "externalImageLibraryData/images"
);
const IMAGES_API_ROUTE = "/api/externalImageLibrary/images/";

type GaleryObjectType = {
  [key: string]: {
    name: string;
    description: string;
    images: string[];
  };
};

// returns JSON object which represents whole databse
function getGalleriesObject(): GaleryObjectType {
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = fs.readFileSync(filePath + "/gallery.json", "utf8");
  return JSON.parse(jsonData);
}

//returns all image related data from image id
//name and description should come from somewhere else
//need to add some storage for that. JSON file for every image or
//change format of general JSON database.
function getImageDataFromId(id: string): ImageData {
  const fileName = `${id}.jpg`;
  const imageData: ImageData = {
    id: id,
    src: getSrcFromFileName(fileName),
    name: fileName,
    description: fileName,
    href: `/image/${id}`,
  };
  return imageData;
}

function getImageDataFromArray(ids: string[]): ImageData[] {
  return ids.map((imageID: string) => getImageDataFromId(imageID));
}

function getIdFromFileName(fileName: string): string {
  return fileName.replace(/\.jpg$/, "");
}
function getFileNameFromId(id: string): string {
  return `${id}.jpg`;
}
function getSrcFromFileName(fileName: string): string {
  return `${IMAGES_API_ROUTE}${fileName}`;
}

export function getAllImagesIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(IMAGES_DIRECTORY);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: getIdFromFileName(fileName),
      },
    };
  });
}

export function getImageData(id: string): { id: string; imageData: ImageData } {
  const fileName = getFileNameFromId(id);
  const filePath = path.join(IMAGES_DIRECTORY, fileName);
  if (fs.existsSync(filePath)) {
    const imageData = getImageDataFromId(id);
    return {
      id,
      imageData,
    };
  } else throw Error(`image ${id} not found`);
}

export function getAllImagesData(): ImageData[] {
  const fileNames = fs.readdirSync(IMAGES_DIRECTORY);
  const allImagesData = fileNames.map((fileName) => {
    const id = getIdFromFileName(fileName);
    return getImageDataFromId(id);
  });
  return allImagesData;
}

export function getGalleryData(galleryId: string): GalleryData {
  const objectData = getGalleriesObject();
  if (galleryId in objectData) {
    const galleryObject = objectData[galleryId];
    const gallery = {
      ...galleryObject,
      images: getImageDataFromArray(galleryObject.images),
      id: galleryId,
    };
    return gallery;
  } else throw Error(`gallery ${galleryId} not found`);
}

export function gatAllGalleriesData(): GalleryData[] {
  const galleryData = getGalleriesObject();
  const res = [];
  for (const key of Object.keys(galleryData)) {
    const galleryObject = galleryData[key];
    const gallery = {
      ...galleryObject,
      images: getImageDataFromArray(galleryObject.images),
      id: key,
    };
    res.push(gallery);
  }

  return res;
}

export function getAllGalleryIds(): {
  params: {
    id: string;
  };
}[] {
  const galleryData = getGalleriesObject();
  return Object.keys(galleryData).map((key) => {
    return {
      params: {
        id: key,
      },
    };
  });
}
