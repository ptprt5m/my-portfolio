"use client";

import { EmptyPortfolioCard, PortfolioCard } from "@/components";
import { Portfolio as PortfolioConst } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";

export const PortfolioPage = () => {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <h2 className="text-4xl font-semibold">
        {PortfolioConst[language].title}
      </h2>
      <div className="grid grid-cols-3 w-full gap-10">
        {PortfolioConst[language].items.map((site) => (
          <PortfolioCard {...site} />
        ))}
        <EmptyPortfolioCard />
      </div>
    </div>
  );
};
