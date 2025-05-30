"use client"

import {
  EmptyPortfolioCard,
  PortfolioCard,
  ScaleAnimation,
} from "@/components"
import { Portfolio as PortfolioConst } from "@/constants"
import { useLanguageContext } from "@/context"
import PageLayout from "./layout"

export const PortfolioPage = () => {
  const { language } = useLanguageContext()

  return (
    <PageLayout pageTitle={PortfolioConst[language].title}>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
        {PortfolioConst[language].items.map((site) => (
          <ScaleAnimation key={site.id} speed={site.id + 1}>
            <PortfolioCard {...site} language={language} />
          </ScaleAnimation>
        ))}
        <ScaleAnimation speed={PortfolioConst[language].items.length + 1}>
          <EmptyPortfolioCard />
        </ScaleAnimation>
      </div>
    </PageLayout>
  )
}
