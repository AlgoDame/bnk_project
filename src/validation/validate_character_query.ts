import Joi from "joi";

export const characterValidator = Joi.object().keys({
    sort: Joi.string().valid("name", "gender", "height").required(),
    order: Joi.string().valid("asc", "desc").required(),
    gender: Joi.string().valid("male", "female", "n/a").required()
});
