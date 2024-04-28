"use client";

import { Skills } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";
import PageLayout from "./layout";
import { CardWrapper } from "../CardWrapper";
import { useState } from "react";
import { Animation } from "../Animation";
import { ScaleAnimation } from "..";

export const SkillsPage = () => {
  const { language } = useLanguageContext();
  const [selectCategory, setSelectCategory] = useState(
    Skills[language].items[0].id
  );
  const toggleSelectCategory = (category: number) => {
    setSelectCategory(category);
  };
  return (
    <PageLayout pageTitle={Skills[language].title}>
      <div className="flex gap-5 w-full items-center justify-between">
        {Skills[language].items.map((category) => (
          <Animation className="w-full" speed={(category.id + 1) / 2} x={-100}>
            <CardWrapper
              key={category.id}
              className="cursor-pointer"
              onClick={() => toggleSelectCategory(category.id)}
            >
              <div className="w-full h-full flex flex-col items-center gap-5">
                <span className="text-xl">{category.title}</span>
                <span className="p-10 rounded-full border-4">
                  {category.level}%
                </span>
              </div>
            </CardWrapper>
          </Animation>
        ))}
      </div>
      <Animation speed={Skills[language].items.length} y={100}>
        <CardWrapper className="max-w-max" useRefLogic={false}>
          {Skills[language].items.map(
            (category) =>
              category.id === selectCategory && (
                <div className="flex gap-5">
                  {category.items.map((skill, i) => (
                    <ScaleAnimation speed={(i + 1) / 3}>
                      <span
                        key={i}
                        className="py-1 px-4 bg-slate-300 dark:bg-slate-600 rounded-xl"
                      >
                        {skill}
                      </span>
                    </ScaleAnimation>
                  ))}
                </div>
              )
          )}
        </CardWrapper>
      </Animation>
    </PageLayout>
  );
};
