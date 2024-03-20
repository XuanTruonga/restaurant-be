import Joi from "joi";
import Regex from "../helpers/regex";
import { ROLE } from "../helpers/constant";

class AuthValidator {
  static validatorRegister(data) {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
      username: Joi.string().min(5).required(),
      phone: Joi.string().required().pattern(Regex.phone),
      role: Joi.string().valid(...ROLE).required(),
      email: Joi.string().pattern(Regex.email),
      password: Joi.string().required(),
      isLock: Joi.boolean(),
      province: Joi.string().required()
    });
    return schema.validate(data);
  }
}
export default AuthValidator;
