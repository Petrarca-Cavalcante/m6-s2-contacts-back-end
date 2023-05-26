import { Express } from "express";
import { contactsRoutes } from "./contacts/contacts.routes";
import { sessionRoute } from "./session/index.routes";
import { userRoutes } from "./user/index.routes";

export const appRoutes = (app: Express) => {
  app.use("/user", userRoutes);
  app.use("/login", sessionRoute);
  app.use("/contacts", contactsRoutes);
};
