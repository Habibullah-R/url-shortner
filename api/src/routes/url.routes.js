import express from "express";
import {
  shortener,
  deleteUrl,
  updateShortUrl,
  accessURL,
  allUrls
} from "../controllers/url.controller.js";

const router = express.Router();

router.get("/allUrls",allUrls)
router.post("/shorten", shortener);
router.delete("/delete/:id", deleteUrl);
router.put("/update/:id",updateShortUrl);
router.get("/:code",accessURL)

export default router;
