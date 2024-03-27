import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetetector from 'i18next-browser-languagedetector';
import HTTPApi from 'i18next-http-backend';
import translationEN from './locale/en/translation.json';
import translationHU from './locale/hu/translation.json';


const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
};


i18next
    .use(initReactI18next)
    .use(LanguageDetetector)
    .use(HTTPApi)
    .init({
        resources,
        lng: 'hu',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      });
    
export default i18next;