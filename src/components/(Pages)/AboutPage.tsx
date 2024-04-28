"use client";

import { About } from "@/constants";
import { LanguageContext } from "@/context";
import { useContext } from "react";
import PageLayout from "./layout";
import { Animation } from "../Animation";

export const AboutCard = () => {
  const { language } = useContext(LanguageContext);

  return (
    <PageLayout pageTitle={About[language].title}>
      <div className="flex flex-col gap-3">
        {Object.entries(About[language].items).map(([key, values], i) => (
          <Animation speed={i}>
            <div key={key}>
              {values.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </Animation>
        ))}
      </div>
    </PageLayout>
  );
};
