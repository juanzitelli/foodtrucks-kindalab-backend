import dotenv from "dotenv";
import { json } from "body-parser";
import express, { Express, RequestHandler } from "express";
import cors from "cors";
import foodtrucksRouter from "./src/routers/foodtrucks.router";
import placesRouter from "./src/routers/places.router";

dotenv.config();

export const app: Express = express();

app.use(json());
app.use(cors());

app.use("/food-trucks", foodtrucksRouter);
app.use("/places", placesRouter);
