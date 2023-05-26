import { Request, Response } from "express";
import  IUserSession  from "../../interfaces/sessions";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const { email, password }: IUserSession = req.body;
  const token = await createSessionService({ email, password });
  return res.json(token);
};

export default createSessionController;
