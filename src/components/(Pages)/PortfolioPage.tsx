"use client";

import { EmptyPortfolioCard, PortfolioCard } from "@/components";
import { Portfolio as PortfolioConst } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";
import PageLayout from "./layout";

export const PortfolioPage = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={PortfolioConst[language].title}>
      <div className="grid grid-cols-3 w-full gap-10">
        {PortfolioConst[language].items.map((site) => (
          <PortfolioCard {...site} />
        ))}
        <EmptyPortfolioCard />
      </div>
    </PageLayout>
  );
};
