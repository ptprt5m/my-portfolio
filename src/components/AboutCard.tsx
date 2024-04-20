'use client'

import { About } from "@/constants";
import { LanguageContext } from "@/context";
import { useContext } from "react";

export const AboutCard = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5">
          <span className="text-4xl font-semibold">{About[language].title}</span>
          <div className="flex flex-col gap-3" >
            {Object.entries(About[language].items).map(([key, values]) => (
              <div key={key}>
                {values.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
