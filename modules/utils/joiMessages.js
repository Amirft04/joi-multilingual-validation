exports.joiMessages = (label, req) => {
  if (!req.t) {
    throw new Error("Translation function (req.t) is not available.");
  }
  return {
    "string.email": `${req.t("string." + label)} ${req.t("joi.string.email")}`,
    "string.base": `${req.t("string." + label)} ${req.t("joi.string.base")}`,
    "string.min": `${req.t("string." + label)} ${req.t("joi.string.min")}`,
    "string.max": `${req.t("string." + label)} ${req.t("joi.string.max")}`,
    "string.length": `${req.t("string." + label)} ${req.t("joi.string.length")}`,
    "string.alphanum": `${req.t("string." + label)} ${req.t(
      "joi.string.alphanum"
    )}`,
    "string.pattern": `${req.t("string." + label)} ${req.t(
      "joi.string.pattern"
    )}`,
    "any.required": `${req.t("string." + label)} ${req.t("joi.any.required")}`,
    "any.only": `${req.t("string." + label)} ${req.t("joi.any.only")}`,
    "string.empty": `${req.t("string." + label)} ${req.t("joi.string.empty")}`,
    "string.pattern.base": `${req.t("string." + label)} ${req.t(
      "joi.string.pattern.base"
    )}`,
    "number.base": `${req.t("string." + label)} ${req.t("joi.number.base")}`,
    "number.min": `${req.t("string." + label)} ${req.t("joi.number.min")}`,
    "number.max": `${req.t("string." + label)} ${req.t("joi.number.max")}`,
    "array.base": `${req.t("string." + label)} ${req.t("joi.array.base")}`,
    "array.min": `${req.t("string." + label)} ${req.t("joi.array.min")}`,
    "array.max": `${req.t("string." + label)} ${req.t("joi.array.max")}`,
    "boolean.base": `${req.t("string." + label)} ${req.t("joi.boolean.base")}`,
    "date.base": `${req.t("string." + label)} ${req.t("joi.date.base")}`,
    "date.format": `${req.t("string." + label)} ${req.t("joi.date.format")}`,
    "date.min": `${req.t("string." + label)} ${req.t("joi.date.min")}`,
    "date.max": `${req.t("string." + label)} ${req.t("joi.date.max")}`,
    "object.base": `${req.t("string." + label)} ${req.t("joi.object.base")}`,
    "object.unknown": `${req.t("string." + label)} ${req.t(
      "joi.object.unknown"
    )}`,
    "object.missing": `${req.t("string." + label)} ${req.t(
      "joi.object.missing"
    )}`,
  };
};
