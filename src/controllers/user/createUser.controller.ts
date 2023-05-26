import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserCreateRequest } from "../../interfaces/user";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserCreateRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(instanceToPlain(newUser));
};

export default createUserController;
