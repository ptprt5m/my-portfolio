"use client";

import {
  EmptyPortfolioCard,
  PortfolioCard,
  ScaleAnimation,
} from "@/components";
import { Portfolio as PortfolioConst } from "@/constants";
import { useLanguageContext } from "@/context/languageCtx";
import PageLayout from "./layout";

export const PortfolioPage = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={PortfolioConst[language].title}>
      <div className="grid grid-cols-3 w-full gap-10">
        {PortfolioConst[language].items.map((site) => (
          <ScaleAnimation speed={site.id}>
            <PortfolioCard {...site} />
          </ScaleAnimation>
        ))}
        <ScaleAnimation speed={PortfolioConst[language].items.length}>
          <EmptyPortfolioCard />
        </ScaleAnimation>
      </div>
    </PageLayout>
  );
};
