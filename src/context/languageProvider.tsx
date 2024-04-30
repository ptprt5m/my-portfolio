"use client";

import { type ReactNode, useCallback, useReducer } from "react";
import { LanguageContext } from "./languageCtx";
import { languageReducer, setLanguageAC } from "./languageReducer";

import { useEffect } from "react";

export const LanguageProvider = ({ children }: { children?: ReactNode }) => {
  const [language, dispatch] = useReducer(
    languageReducer,
    (typeof window !== 'undefined' ? localStorage.getItem("lang") : null) || 'ru'
  );

  const setLanguage = useCallback(
    (lang: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem("lang", lang);
      }
      dispatch(setLanguageAC(lang));
    },
    [dispatch]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localLanguage = localStorage.getItem("lang");
      if (localLanguage) {
        dispatch(setLanguageAC(localLanguage));
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};