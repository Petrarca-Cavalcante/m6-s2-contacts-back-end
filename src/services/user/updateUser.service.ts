import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import { AppError } from "../../errors/appError";
import { IUserUpdateRequest, IUserCreateResponse } from "../../interfaces/user";

const updateUserService = async (
  id: string,
  { email, password, name, telefones }: IUserUpdateRequest
): Promise<IUserCreateResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  if (findUser.isActive === false) {
    throw new AppError("User is already inactive");
  }

  await userRepository.update(id, {
    email: email ? email : findUser.email,
    name: name ? name : findUser.name,
    password: password ? password : findUser.password,
    telefones: telefones ? telefones : findUser.telefones,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default updateUserService;
