import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tambahkan 'ar' ke dalam tipe Language
type Language = 'id' | 'uk' | 'ar';

interface LangContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk'); // Set default language

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
