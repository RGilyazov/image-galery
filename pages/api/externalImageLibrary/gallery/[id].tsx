import fsPromises from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
function getIdFromFileName(fileName: string): string {
  return fileName.replace(/\.jpg$/, "");
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const galleryId: string = String(req.query.id);
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = await fsPromises.readFile(
    filePath + "/gallery.json",
    "utf8"
  );
  const objectData = JSON.parse(jsonData);
  res.setHeader("Content-Type", "itext/json");
  if (galleryId in objectData) {
    const gallery = objectData[galleryId];
    gallery.images = gallery.images.map((imageID: string) => {
      return {
        id: getIdFromFileName(imageID),
        src: `/api/externalImageLibrary/images/${imageID}`,
        name: imageID,
        description: imageID,
      };
    });
    res.send({ id: galleryId, ...gallery });
  } else res.status(404).json({ err: "gallery not found" });
};
