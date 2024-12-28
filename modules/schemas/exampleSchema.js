const Joi = require("joi");
const { joiMessages } = require("../utils/joiMessages");

exports.exampleSchema = (req) =>
  Joi.object({
    title: Joi.string()
      .min(3)
      .required()
      .messages(joiMessages("title", req)),
    content: Joi.string()
      .min(3)
      .required()
      .messages(joiMessages("content", req))
  });
