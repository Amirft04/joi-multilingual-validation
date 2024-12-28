const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const config = require("../config/config");

i18next
  .use(Backend) // Load translation files
  .use(middleware.LanguageDetector) // Automatically detect the user's language
  .init({
    backend: {
      loadPath: "./locales/{{lng}}/translation.json", // Path for translation files
    },
    fallbackLng: "en", // Fallback language if detected language isn't available
    preload: config.requiredLanguages, // Languages to preload
    saveMissing: true, // Optionally save missing translations
    detection: {
      // Specify detection order: 1st 'header', 2nd 'cookie', 3rd 'query'
      order: ["header", "cookie", "query"],
      // Specify the cookie name to use for storing language
      caches: ["cookie"],
    },
  });

module.exports = i18next;
