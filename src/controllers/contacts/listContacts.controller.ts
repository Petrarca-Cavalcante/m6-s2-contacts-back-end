import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactsController = async (req: Request, res: Response) => {
  const id: string = req.user.id;
  const contacts = await listContactsService(id);
  return res.json(contacts);
};

export default listContactsController;
