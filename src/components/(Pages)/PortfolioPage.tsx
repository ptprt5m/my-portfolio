"use client";

import {
  EmptyPortfolioCard,
  PortfolioCard,
  ScaleAnimation,
} from "@/components";
import { Portfolio as PortfolioConst } from "@/constants";
import { useLanguageContext } from "@/context";
import PageLayout from "./layout";

export const PortfolioPage = () => {
  const { language } = useLanguageContext();

  return (
    <PageLayout pageTitle={PortfolioConst.title}>
      <div className="grid grid-cols-3 w-full gap-10">
        {PortfolioConst.items.map((site) => (
          <ScaleAnimation speed={site.id + 1}>
            <PortfolioCard {...site} />
          </ScaleAnimation>
        ))}
        <ScaleAnimation speed={PortfolioConst.items.length + 1}>
          <EmptyPortfolioCard />
        </ScaleAnimation>
      </div>
    </PageLayout>
  );
};
