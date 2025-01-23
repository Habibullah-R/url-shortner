import express from "express";
import {
  shortener,
  getStats,
  deleteUrl,
  updateShortUrl,
  accessURL,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/shorten", shortener);
router.get("/stats/:id", getStats);
router.delete("/delete/:id", deleteUrl);
router.put("/update/:id",updateShortUrl);
router.get("/:code",accessURL)

export default router;
