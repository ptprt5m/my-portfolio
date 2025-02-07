"use client"

import { LANGUAGES } from "@/constants"
import { useLanguageContext } from "@/context"

export const LanguageToggler = () => {
  const { language, setLanguage } = useLanguageContext()

  return (
    <div>
      {language === LANGUAGES.EN ? (
        <button
          className="text-bold transition hover:opacity-75"
          onClick={() => setLanguage(LANGUAGES.RU)}
        >
          EN
        </button>
      ) : (
        <button
          className="text-bold transition hover:opacity-75"
          onClick={() => setLanguage(LANGUAGES.EN)}
        >
          RU
        </button>
      )}
    </div>
  )
}
