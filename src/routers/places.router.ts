import express from "express";
import { getPlacesPredictionsByInput } from "../controllers/places.controller";
const router = express.Router();

router.get("/", getPlacesPredictionsByInput);

export default router;
