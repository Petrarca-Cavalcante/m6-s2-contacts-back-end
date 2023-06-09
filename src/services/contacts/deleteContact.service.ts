import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";
import { Icontacts, IContactsCreateResponse } from "../../interfaces/contacts";


const deleteContactService = async (
  id: string,
  contactId: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const user = await userRepository.findOneBy({ id });

  const contact = await contactsRepository.findOne({
    relations: { user: true },
    where: { id: contactId, user: { id: id } },
  });

  if(!contact){
    throw new AppError(
        "Contact not found or user does not own the contact",400
    )
  }
  await contactsRepository.delete({id:contactId})
  return {message:"Contact has been deleted"}

  //   await userRepository.save(newContact);

  //   return newContact;
};

export default deleteContactService;
