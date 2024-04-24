'use client'

import { useCallback, useReducer } from "react";
import { LanguageContext } from "./languageCtx";
import { languageReducer, setLanguageAC } from "./languageReducer";

import { useEffect } from 'react';

export const LanguageProvider = ({ children }) => {
  const [language, dispatch] = useReducer(languageReducer, localStorage.getItem('lang') || 'ru');

  const setLanguage = useCallback((lang) => {
    localStorage.setItem('lang', lang);
    dispatch(setLanguageAC(lang));
  }, [dispatch]);

  useEffect(() => {
    const localLanguage = localStorage.getItem('lang');
    if (localLanguage) {
      dispatch(setLanguageAC(localLanguage));
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};