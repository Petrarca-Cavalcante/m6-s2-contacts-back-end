import { Router } from "express";
import createSessionController from "../../controllers/session/createSession.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { sessionSchema } from "../../schemas/sessions/index.schemas"; 

const sessionRoute = Router();

sessionRoute.post(
  "",
  validateSchemaMiddleware(sessionSchema),
  createSessionController
);

export { sessionRoute };
