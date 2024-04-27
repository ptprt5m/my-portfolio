"use client";

import { Experience as ExperienceConst } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";
import { Coding, Location, Star, Target } from "@/svg";
import { CardWrapper } from "..";

export const ExperiencePage = () => {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <h2 className="text-4xl font-semibold">
        {ExperienceConst[language].title}
      </h2>
      <div className="w-full flex flex-col gap-10">
        {ExperienceConst[language].items.map((item) => (
          <CardWrapper key={item.company} className="flex flex-col gap-3 w-full max-w-full" useRefLogic={false}>
            <h2 className="text-2xl">{item.company}</h2>
            {item.desc && <p>{item.desc}</p>}
            <span>{item.duration}</span>
            <div className="flex gap-3">
              <span className="py-0.5 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
                <Location size={17} /> {item.location}
              </span>
              <span className="py-0.5 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
                <Target size={22} /> {item.workFormat}
              </span>
              <span className="py-0.5 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
                <Coding size={23} /> {item.role}
              </span>
              <span className="py-0.5 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
                <Star size={24} /> {item.level}
              </span>
            </div>
            <div className="flex gap-3 w-full flex-wrap">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="py-0.5 px-4 bg-slate-300 dark:bg-slate-800 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};
