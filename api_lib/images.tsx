import fs from "fs";
import path from "path";

const imagesDirectory = path.join(process.cwd(), "images");

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

type ImageData = { id: string; src: string; description: string; name: string };

export async function getImageData(
  id: string
): Promise<{ id: string; imageData: ImageData }> {
  const fileName = `${id}.jpg`;
  const imageData: ImageData = {
    id: getIdFromFileName(fileName),
    src: `/api/externalImageLibrary/${fileName}`,
    name: fileName,
    description: fileName,
  };

  // Combine the data with the id and contentHtml
  return {
    id,
    imageData,
  };
}

export function getAllImagesData(): ImageData[] {
  const fileNames = fs.readdirSync(imagesDirectory);
  const allImagesData = fileNames.map((fileName) => {
    return {
      id: getIdFromFileName(fileName),
      src: `/api/externalImageLibrary/${fileName}`,
      name: fileName,
      description: fileName,
    };
  });
  return allImagesData;
}
