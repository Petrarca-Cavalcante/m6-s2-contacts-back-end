import { IUserUpdateRequest } from "../../interfaces/user";
import updateUserService from "../../services/user/updateUser.service";
import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const { email, name, password, telefones }: IUserUpdateRequest = req.body;
  const updatedUser = await updateUserService(id, {
    email,
    name,
    password,
    telefones,
  });
  return res.json(updatedUser);
};

export default updateUserController;
