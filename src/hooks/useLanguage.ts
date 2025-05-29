
import { useState, useEffect } from 'react';

export type Language = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar' | 'pt' | 'de' | 'ru';

interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

const detectLanguage = (): Language => {
  // Проверяем сохраненный язык
  const stored = localStorage.getItem('preferred-language');
  if (stored && languages.some(lang => lang.code === stored)) {
    console.log('Detected stored language:', stored);
    return stored as Language;
  }

  // Получаем языки браузера (все предпочитаемые языки)
  const browserLanguages = navigator.languages || [navigator.language];
  console.log('Browser languages:', browserLanguages);
  
  const supportedLanguages = languages.map(lang => lang.code);
  
  // Проверяем каждый язык браузера
  for (const browserLang of browserLanguages) {
    // Извлекаем основной код языка (например, 'ru' из 'ru-RU')
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Специальная обработка для китайского языка
    if (browserLang.toLowerCase().includes('zh')) {
      console.log('Detected Chinese language');
      return 'zh';
    }
    
    // Проверяем, поддерживается ли язык
    if (supportedLanguages.includes(langCode as Language)) {
      console.log('Detected supported language:', langCode);
      return langCode as Language;
    }
  }
  
  console.log('Using default language: en');
  return 'en'; // По умолчанию английский
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    return detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', currentLanguage);
    console.log('Language changed to:', currentLanguage);
    
    // Устанавливаем атрибут lang для HTML элемента для лучшей доступности
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    console.log('Changing language to:', language);
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    changeLanguage,
    languages,
  };
};
