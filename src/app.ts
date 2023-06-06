import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { appRoutes } from "./routes/index.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import cors  from "cors";

const app = express();
app.use(express.json());
app.use(cors());
appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
