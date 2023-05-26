import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import { AppError } from "../../errors/appError";
import { IUserCreateRequest, IUserCreateResponse } from "../../interfaces/user";

const createUserService = async (
  userData: IUserCreateRequest
): Promise<IUserCreateResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const verifyUser = await userRepository.findOneBy({ email: userData.email });

  if (verifyUser) {
    throw new AppError("User aready exists");
  }

  const newUser = userRepository.create({
    ...userData,
    contacts: [],
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
