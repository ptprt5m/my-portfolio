"use client";

import { LANGUAGES } from "@/constants";
import { useLanguageContext } from "@/context";
import { useTranslation } from "next-i18next";

export const LanguageToggler = () => {
  // const { language, setLanguage } = useLanguageContext();
  const { i18n } = useTranslation();
  return (
    <div>
      <button
        className="text-bold transition hover:opacity-75"
        onClick={() =>
          i18n.changeLanguage(
            i18n.language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN
          )
        }
      >
        {i18n.language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN}
      </button>
      {/* {language === LANGUAGES.EN ? (
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
      )} */}
    </div>
  );
};
