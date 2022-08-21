import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    const imageName = req.query.id;
    const filePath = path.resolve(
      ".",
      `externalImageLibraryData/images/${imageName}`
    );
    if (fs.existsSync(filePath)) {
      const imageBuffer = fs.readFileSync(filePath);
      res.setHeader("Content-Type", "image/jpg");
      res.status(200).send(imageBuffer);
      return true;
    } else {
      res.setHeader("Content-Type", "text/json");
      res.status(404).send({ err: "gallery not found" });
      return true;
    }
  });
};
