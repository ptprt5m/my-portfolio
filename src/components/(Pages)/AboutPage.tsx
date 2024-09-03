"use client";

import { About } from "@/constants";
import { useLanguageContext } from "@/context";
import PageLayout from "./layout";
import { Animation } from "../Animation";

export const AboutCard = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={About[language].title}>
      <div className="flex flex-col gap-3">
        {Object.entries(About[language].items).map(([key, values], i) => (
          <Animation speed={i} x={-100} key={key}>
            <div>
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
