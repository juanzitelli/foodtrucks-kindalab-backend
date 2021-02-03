import dotenv from "dotenv";
import { json } from "body-parser";
import express, { Express, RequestHandler } from "express";
import cors from "cors";
import { TestControllerFunction } from "./src/controllers/test.controller";

dotenv.config();

const app: Express = express();
app.use(json());
app.use(cors());

app.get("/", TestControllerFunction);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});
