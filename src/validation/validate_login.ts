import Joi from "joi";

export const loginValidator = Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().email().required(),

});
