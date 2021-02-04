import dotenv from "dotenv";
import { json } from "body-parser";
import express, { Express, RequestHandler } from "express";
import cors from "cors";
import { getFoodTrucksByCoordinates } from "./src/controllers/foodtrucks.controller";

dotenv.config();

export const app: Express = express();
app.use(json());
app.use(cors());

app.get("/food-trucks", getFoodTrucksByCoordinates);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});
