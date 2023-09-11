import { Int_UserDetails } from "src/models/users.model";
import * as Joi from "joi";


export const UserDetailsSchema = Joi.object<
Int_UserDetails,
  true
>().keys({
    name:Joi.string().min(3).required(),
    mobile:Joi.number().min(10).required(),
    address:Joi.string().min(3).required()
});
