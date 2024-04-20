'use client'

import { createContext, useContext } from "react";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);
