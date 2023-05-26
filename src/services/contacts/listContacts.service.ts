import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";

const listContactsService = async (id: string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({id})
  const contacts = user?.contacts

  if (!contacts) {
    throw new AppError(
      "Contact not found or user does not own any contact",
      400
    );
  }

  return contacts;
};

export default listContactsService;
