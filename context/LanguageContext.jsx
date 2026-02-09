import { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    let fallback = translations.en;
    for (const key of keys) {
      value = value?.[key];
      fallback = fallback?.[key];
    }
    return value ?? fallback ?? path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
