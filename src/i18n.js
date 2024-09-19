import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // For loading translations from the server

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application",
      description: "This is a sample application with multi-language support.",
      title:"This is a sample page"
      
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a nuestra aplicación",
      description: "Esta es una aplicación de muestra con soporte multilingüe.",
      title:"Esta es una página de muestra"
    }
  }
};

// Initialize i18next
i18n
  .use(Backend) // For loading translations from the server
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;