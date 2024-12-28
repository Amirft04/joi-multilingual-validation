# Joi Multilingual Validation

A utility for handling Joi validation with custom multilingual error messages in an Express.js application.

## Features

- Multilingual support using `i18next`.
- Custom Joi validation messages per language.
- Reusable message mapping utility for easy customization.
- Automatically detect language based on `Accept-Language` header or fallback to a default language.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AmirFt04/joi-multilingual-validation.git
cd joi-multilingual-validation
npm install
```

## Usage

npm start

Create a POST request:
POST: http://localhost:3000/validate
Headers:
Accept-Language: en (or any other supported language)
Content-Type: application/json

Request Example:

```json
{
  "title": "",
  "content": "content"
}
```

Example Responses:

- (in English):

```json
{
  "error": "Title cannot be empty."
}
```

- (in Persian):

```json
{
  "error": "عنوان وارد شود"
}
```

## How it Works

- Joi Validation: The utility uses Joi to validate the incoming data.
- Multilingual Messages: Error messages are mapped to different languages using i18next. It detects the language from the Accept-Language header or defaults to English if no language is specified.
- Custom Translations: You can customize the error messages for each language by modifying the translation files in the locales directory.

## Customization

1. Add New Languages:
   To add a new language:

   1. Create a new JSON file in the locales directory (e.g., locales/es.json for Spanish).
   2. Add translations for each validation message key.

2. Add the New Language to config.requiredLanguages:
   To ensure the language is preloaded, open the config/config.js file and add the language code to the requiredLanguages array:

```javascript
module.exports = {
  requiredLanguages: ["en", "fa", "es"], // Add "es" for Spanish
};
```

## Contributing

Feel free to open issues or pull requests if you have suggestions or improvements!
