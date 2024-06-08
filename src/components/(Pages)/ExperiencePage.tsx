"use client";

import { Experience as ExperienceConst } from "@/constants";
import { useLanguageContext } from "@/context";
import { CardWrapper } from "../CardWrapper";
import PageLayout from "./layout";
import { Animation } from "../Animation";
import { ExperienceInfo } from "../ExperienceInfo";

export const ExperiencePage = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={ExperienceConst[language].title}>
      <div className="w-full flex flex-col gap-10">
        {ExperienceConst[language].items.map((item, i) => (
          <>
            <Animation speed={i + 1} y={-100}>
              <div className="flex flex-col gap-3 w-full max-w-full md:hidden">
                <ExperienceInfo {...item} />
              </div>
              <CardWrapper
                key={item.company}
                className="hidden md:flex flex-col gap-3 w-full max-w-full"
                useRefLogic={false}
              >
                <ExperienceInfo {...item} />
              </CardWrapper>
            </Animation>
            {i !== ExperienceConst[language].items.length - 1 && <div className="w-full bg-slate-400 h-0.5 block md:hidden"></div>}
          </>
        ))}
      </div>
    </PageLayout>
  );
};
