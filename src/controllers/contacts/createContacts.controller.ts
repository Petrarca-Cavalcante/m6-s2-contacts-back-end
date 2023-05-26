import { Request, Response } from "express";
import { Icontacts } from "../../interfaces/contacts"; 
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData: Icontacts = req.body;
  const id: string = req.user.id;
  const newContact = await createContactService(id, contactData);
  return res.status(201).json(newContact);
};

export default createContactController;
