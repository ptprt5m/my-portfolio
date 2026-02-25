"use client"

import {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 max-w-3xl mx-auto">
        {PortfolioConst[language].items.map((site) => (
          <ScaleAnimation key={site.id} speed={site.id + 1}>
            <PortfolioCard {...site} language={language} />
          </ScaleAnimation>
        ))}
      </div>
    </PageLayout>
  )
}
