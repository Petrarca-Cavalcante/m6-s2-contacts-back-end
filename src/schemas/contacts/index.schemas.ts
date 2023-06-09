import * as yup from "yup";
import { ObjectSchema } from "yup";
import { Icontacts } from "../../interfaces/contacts";

export const contactsSchema: ObjectSchema<Icontacts> = yup.object().shape({
  emails: yup.array().required(),
  name: yup.string().required(),
  telefones: yup.array().required(),
});

export const contactUpdateSchema = yup.object().shape({
  emails: yup.array(yup.string().email()),
  name: yup.string(),
  telefones: yup.array(yup.string()),
});
