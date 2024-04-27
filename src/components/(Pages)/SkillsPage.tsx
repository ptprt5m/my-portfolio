"use client";

import { Skills } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";
import PageLayout from "./layout";

export const SkillsPage = () => {
  const { language } = useLanguageContext();
  return (
    <PageLayout pageTitle={Skills[language].title}>
      <div className="flex flex-col gap-5 w-full items-center">
        {Skills[language].items.map((category) => (
          <div key={category.id} className="flex flex-col gap-3 items-center">
            <span className="text-2xl">{category.title}</span>
            <div className="flex gap-5">
              {category.items.map((skill, i) => (
                <span
                  key={i}
                  className="py-0.5 px-4 bg-slate-300 dark:bg-slate-600 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
