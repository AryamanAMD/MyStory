// D:\PROJECTS\portfolio\lib\translations.ts

type Language = 'en' | 'es'; // Add more languages as needed
type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    welcome: "Welcome to our website",
    // Add more key-value pairs for other texts
  },
  es: {
    welcome: "Bienvenido a nuestro sitio web",
    // Add more key-value pairs for other texts
  },
};

export const translate = (key: string, lang: Language): string => {
  return translations[lang]?.[key] || key; // Optional chaining to prevent runtime errors
};
