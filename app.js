const express = require("express");
const i18nextMiddleware = require("i18next-http-middleware");
const i18next = require("./modules/middlewares/i18next"); // Correct import
const { exampleSchema } = require("./modules/schemas/exampleSchema");

const app = express();

// Force 'en' as default language if not detected
app.use((req, res, next) => {
  if (!req.language) {
    req.language = 'en';
  }
  next();
});

app.use(express.json());
app.use(i18nextMiddleware.handle(i18next));

app.post("/validate", (req, res) => {
  const { error } = exampleSchema(req).validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  res.status(200).send("Validation passed");
});

app.get("/test-language", (req, res) => {
  res.json({ detectedLanguage: req.language });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
