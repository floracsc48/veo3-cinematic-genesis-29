
import { translations, type Translation } from './translations';
import type { Language } from '../hooks/useLanguage';

export const useTranslation = (language: Language): Translation => {
  return translations[language] || translations.en;
};

export { type Translation } from './translations';
