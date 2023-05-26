import AppDataSource from "../../data-source";
// import { User } from "../../entities/user.entity";
import { Contacts } from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";

const updateContactService = async (
  id: string,
  userId: string,
  { emails, name, telefones }: any
): Promise<any> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const findContact = await contactsRepository.findOne({
    relations: { user: true },
    where: { id: id, user: { id: userId } },
  });

  if (!findContact) {
    throw new AppError(
      "Contact not found or user does not own the contact",
      400
    );
  }

  await contactsRepository.update(id, {
    emails: emails ? emails : findContact.emails,
    name: name ? name : findContact.name,
    telefones: telefones ? telefones : findContact.telefones,
  });

  const contact = await contactsRepository.findOneBy({ id });

  return contact;
};

export default updateContactService;
