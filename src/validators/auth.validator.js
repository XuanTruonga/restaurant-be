import Joi from "joi";

class AuthValidator {
  static validatorRegister(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      username: Joi.string().required(),
      phone: Joi.string().required(),
      role: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isLock: Joi.boolean().required(),
    });
    return schema.validate(data);
  }
}
export default AuthValidator;
