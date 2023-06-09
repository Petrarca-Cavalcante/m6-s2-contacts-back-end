import * as yup from "yup";
import { ObjectSchema } from "yup";
import  IUserSession  from "../../interfaces/sessions";

export const sessionSchema: ObjectSchema<IUserSession> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
