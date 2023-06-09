import AppDataSource from "../../data-source";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import IUserSession from "../../interfaces/sessions";

const createSessionService = async ({ email, password }: IUserSession) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError("invalid email or password", 403);
  }
  if (!user.isActive) {
    throw new AppError("Invalid user", 403);
  }
  const matchPassword = await compare(password, user.password);
  if (!matchPassword) {
    throw new AppError("Invalid email or password", 403);
  }
  

  const token = jwt.sign({ ...user }, process.env.SECRET_KEY as string, {
    subject: user.id,
    expiresIn: "24h",
  });
  
  return {token,user};
};

export default createSessionService;
