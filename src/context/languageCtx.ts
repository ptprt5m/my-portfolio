"use client"

import { createContext, useContext } from "react"

export const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
})

export const useLanguageContext = () => useContext(LanguageContext)
