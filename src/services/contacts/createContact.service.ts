import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";
import { Icontacts, IContactsCreateResponse } from "../../interfaces/contacts";


const createContactService = async (
  id: string,
  contactData: Icontacts
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const user = await userRepository.findOneBy({ id });

  const newContact: IContactsCreateResponse = contactsRepository.create({ ...contactData, user: user! });

  await contactsRepository.save(newContact);
  delete newContact.user
  
  return newContact;
};

export default createContactService;
