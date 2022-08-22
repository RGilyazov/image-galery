import fsPromises from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function ApiGetGalleries(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.resolve(".", `externalImageLibraryData`);
  const jsonData = await fsPromises.readFile(
    filePath + "/gallery.json",
    "utf8"
  );
  const objectData = JSON.parse(jsonData);

  res.setHeader("Content-Type", "text/json");
  res.send(objectData);
}
