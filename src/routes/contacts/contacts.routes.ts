import { Router } from "express";
import createContactController from "../../controllers/contacts/createContacts.controller";
import deleteContactController from "../../controllers/contacts/deleteContact.controller";
import listContactsController from "../../controllers/contacts/listContacts.controller";
import updateContactController from "../../controllers/contacts/updateContact.controller";
import { validateSchemaMiddleware } from "../../middlewares/schemaValidator.middleware";
import { tokenVerifyMiddleware } from "../../middlewares/tokenVerify.middleware";
import {
  contactsSchema,
  contactUpdateSchema,
} from "../../schemas/contacts/index.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "/",
  tokenVerifyMiddleware,
  validateSchemaMiddleware(contactsSchema),
  createContactController
);

contactsRoutes.delete("/:id", tokenVerifyMiddleware, deleteContactController);

contactsRoutes.patch(
  "/:id",
  tokenVerifyMiddleware,
  validateSchemaMiddleware(contactUpdateSchema),
  updateContactController
);

contactsRoutes.get("/", tokenVerifyMiddleware, listContactsController);

export { contactsRoutes };
