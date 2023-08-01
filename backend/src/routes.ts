import { Application } from "express";
import "express-async-errors";
import multer from "multer";
import { detectText } from "./services/ocr";

const upload = multer({ storage: multer.memoryStorage() });

export const registerRoutes = (app: Application) => {
  app.post("/ocr", upload.single("image"), (req, res) => {
    const image = req.file?.buffer;
    if (!image) {
      res.sendStatus(400).json({ error: "Missing image" });
      return;
    }
    // TODO: Validate image?

    detectText(image);
  });
};
