import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const id: string = req.user.id;
  const message = await deleteContactService(id, contactId);
  return res.status(202).json(message);
};

export default deleteContactController;
