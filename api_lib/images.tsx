import path from "path";
import { ImageData, GalleryData } from "./imagesTypes";

const fsAsync = require("fs").promises;

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
async function getGalleriesObject(): Promise<GaleryObjectType> {
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = await fsAsync.readFile(filePath + "/gallery.json", "utf8");
  return JSON.parse(jsonData);
}

//returns all image related data from image id
//name and description should come from somewhere else
//need to add some storage for that. JSON file for every image or
//change format of general JSON database.
function getImageDataFromId(id: string, galleryId: string): ImageData {
  const fileName = `${id}.jpg`;
  const imageData: ImageData = {
    id: id,
    src: getSrcFromFileName(fileName),
    name: fileName,
    description: fileName,
    href: `/gallery/${galleryId}/image/${id}`,
    galleryId: galleryId,
  };
  return imageData;
}

function getImageDataFromArray(ids: string[], galleryId: string): ImageData[] {
  return ids.map((imageID: string) => getImageDataFromId(imageID, galleryId));
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

export async function getAllImagesIds(): Promise<
  {
    params: { imageId: string; galleryId: string };
  }[]
> {
  const objectData = await getGalleriesObject();
  const res = [];
  for (let galleryId of Object.keys(objectData)) {
    const galleryObject = objectData[galleryId];
    galleryObject.images.forEach((fileName) => {
      res.push({
        params: {
          imageId: getIdFromFileName(fileName),
          galleryId: galleryId,
        },
      });
    });
  }
  return res;
}

export async function getImageData(
  id: string,
  galleryId: string
): Promise<{ id: string; imageData: ImageData }> {
  const fileName = getFileNameFromId(id);
  const filePath = path.join(IMAGES_DIRECTORY, fileName);
  try {
    await fsAsync.access(filePath);
  } catch (error) {
    throw Error(`image ${id} not found`);
  }

  const imageData = getImageDataFromId(id, galleryId);
  return {
    id,
    imageData,
  };
}

/* export function getAllImagesData(): ImageData[] {
  const fileNames = fs.readdirSync(IMAGES_DIRECTORY);
  const allImagesData = fileNames.map((fileName) => {
    const id = getIdFromFileName(fileName);
    return getImageDataFromId(id, "");
  });
  return allImagesData;
} */

export async function getGalleryData(galleryId: string): Promise<GalleryData> {
  const objectData = await getGalleriesObject();
  if (galleryId in objectData) {
    const galleryObject = objectData[galleryId];
    const gallery = {
      ...galleryObject,
      images: getImageDataFromArray(galleryObject.images, galleryId),
      id: galleryId,
    };
    return gallery;
  } else throw Error(`gallery ${galleryId} not found`);
}

export async function gatAllGalleriesData(): Promise<GalleryData[]> {
  const galleryData = await getGalleriesObject();
  const res = [];
  for (const key of Object.keys(galleryData)) {
    const galleryObject = galleryData[key];
    const gallery = {
      ...galleryObject,
      images: getImageDataFromArray(galleryObject.images, key),
      id: key,
    };
    res.push(gallery);
  }

  return res;
}

export async function getAllGalleryIds(): Promise<
  {
    params: {
      galleryId: string;
    };
  }[]
> {
  const galleryData = await getGalleriesObject();
  return Object.keys(galleryData).map((key) => {
    return {
      params: {
        galleryId: key,
      },
    };
  });
}
