import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { changeTranslation } from '../utils/changeTranslation';

interface TranslationContextState {
  currentLang: string;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

const TranslationContext = createContext<TranslationContextState | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  const toggleLanguage = useCallback(() => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const t = useCallback(
    (path: string) => {
      return changeTranslation(path, currentLang);
    },
    [currentLang]
  );

  const value = useMemo(
    () => ({
      currentLang,
      toggleLanguage,
      t,
    }),
    [currentLang, toggleLanguage, t]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = (): TranslationContextState => {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
};
