import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const imageName = req.query.id;
  const filePath = path.resolve(
    ".",
    `externalImageLibraryData/images/${imageName}`
  );
  const imageBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
};
