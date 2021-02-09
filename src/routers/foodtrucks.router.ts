import express from "express";
import { getFoodTrucksByCoordinates } from "../controllers/foodtrucks.controller";
const router = express.Router();

router.get("/", getFoodTrucksByCoordinates);

export default router;
