import Joi from "joi";

export const userValidator = Joi.object().keys({
    first_name: Joi.string().required(),
    surname: Joi.string().required(),
    password: Joi.string().required().min(5).max(20),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    phone_number: Joi.number().required(),
    date_of_birth: Joi.date().required(),
    secret_question: Joi.string().required().min(5).max(100),
    secret_answer: Joi.string().required().min(3).max(200)

});
