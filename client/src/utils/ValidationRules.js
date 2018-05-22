import Joi from 'joi';

const Validation = {
  username: Joi.string()
    .label('Username')
    .min(3)
    .alphanum()
    .max(20)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .label('Password')
    .required(),
  password2: Joi.string()
    .label('Confirm Password')
    .required(),
};

export default Validation;
