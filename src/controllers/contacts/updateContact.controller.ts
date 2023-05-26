import { Request, Response } from "express";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const userId: string = req.user.id;
  const contactData = req.body;
  const contact = await updateContactService(id, userId, { ...contactData });
  return res.json(contact);
};

export default updateContactController;
