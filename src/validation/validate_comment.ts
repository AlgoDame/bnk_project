import Joi from "joi";

export const commentValidator = Joi.object().keys({
    comment: Joi.string().min(3).max(500).required()
});
