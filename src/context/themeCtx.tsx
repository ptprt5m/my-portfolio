"use client"

import { ThemeContextType, ThemeVariants } from "@/models"
import React, {
  type ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react"

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  toggleTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme")
      return storedTheme &&
        Object.values(ThemeVariants).includes(storedTheme as ThemeVariants)
        ? (storedTheme as ThemeVariants)
        : ThemeVariants.light
    } else {
      return ThemeVariants.light
    }
  })

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeVariants.light
        ? ThemeVariants.dark
        : ThemeVariants.light
    )
  }

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
    document.documentElement.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
