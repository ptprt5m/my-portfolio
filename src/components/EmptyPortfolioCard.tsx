"use client"

import { BasicMessages } from "@/constants"
import { useLanguageContext } from "@/context"
import { cn } from "@/utils"

interface SkeletonProps {
  className?: string
}

const Skeleton = ({ className }: SkeletonProps) => (
  <span className={cn("bg-slate-300 dark:bg-slate-700", className)} />
)

const SkeletonTag = ({ width = "sm" }: { width?: string }) => (
  <Skeleton
    className={cn(`text-sm font-normal rounded-lg py-0.5 px-3 h-5 text-white`, {
      "w-16": width === "sm",
      "w-24": width === "md",
      "w-32": width === "lg",
    })}
  />
)

export const EmptyPortfolioCard = () => {
  const { language } = useLanguageContext()

  return (
    <a
      className="border border-dashed max-w-lg m-auto border-slate-400 dark:border-slate-500 overflow-hidden rounded-xl flex flex-col cursor-not-allowed h-full"
      aria-label="Coming soon"
    >
      <div className="w-full h-48 bg-slate-300 dark:bg-slate-700 flex justify-center items-center">
        <span className="text-slate-400">
          {BasicMessages[language].soon}...
        </span>
      </div>

      <div className="py-5 px-7 flex flex-col gap-2">
        <Skeleton className="font-semibold text-xl w-full h-5 rounded-xl" />
        <Skeleton className="text-base font-light w-full h-16 rounded-xl" />

        <div className="flex gap-2 justify-between">
          <SkeletonTag width="lg" />
          <SkeletonTag />
          <SkeletonTag width="md" />
        </div>
      </div>
    </a>
  )
}
