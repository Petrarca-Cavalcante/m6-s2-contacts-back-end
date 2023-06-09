import { Request, Response } from "express";
import autoDeleteUserService from "../../services/user/autoDeleteUser.service";

const autoDeleteUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  await autoDeleteUserService(id);
  return res.status(204).send();
};

export default autoDeleteUserController;
