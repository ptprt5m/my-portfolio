"use client";

import { LANGUAGES } from "@/constants";
import { LanguageContext } from "@/context";
import { useContext } from "react";

export const LanguageToggler = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      {language === LANGUAGES.EN ? (
        <button className="text-bold transition hover:opacity-75" onClick={() => setLanguage(LANGUAGES.RU)}>EN</button>
      ) : (
        <button className="text-bold transition hover:opacity-75" onClick={() => setLanguage(LANGUAGES.EN)}>RU</button>
      )}
    </div>
  );
};
