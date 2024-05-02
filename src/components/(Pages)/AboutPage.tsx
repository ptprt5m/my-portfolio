"use client";

import { About } from "@/constants";
import { useLanguageContext } from "@/context";
import PageLayout from "./layout";
import { Animation } from "../Animation";

export const AboutCard = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={About.title}>
      <div className="flex flex-col gap-3">
        {Object.entries(About.items).map(([key, values], i) => (
          <Animation speed={i} x={-100}>
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
