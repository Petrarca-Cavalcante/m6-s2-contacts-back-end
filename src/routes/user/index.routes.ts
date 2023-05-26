import { Router } from "express";
import autoDeleteUserController from "../../controllers/user/autoDeleteUser.controller";
import createUserController from "../../controllers/user/createUser.controller";
import retrieveUserController from "../../controllers/user/retrieveUser.service";
import updateUserController from "../../controllers/user/updateUser.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { tokenVerifyMiddleware } from "../../middlewares/tokenVerify.middleware";
import { userSchema, userUpdateSchema } from "../../schemas/user/index.schemas";

const userRoutes = Router();

userRoutes.post("", validateSchemaMiddleware(userSchema), createUserController);

userRoutes.patch(
  "",
  tokenVerifyMiddleware,
  validateSchemaMiddleware(userUpdateSchema),
  updateUserController
);
userRoutes.delete("", tokenVerifyMiddleware, autoDeleteUserController);

userRoutes.get("", tokenVerifyMiddleware, retrieveUserController);

export { userRoutes };
