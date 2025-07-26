'use client'

import { BasicMessages } from "@/constants"
import { useLanguageContext } from "@/context"

export const NotFoundMessage = () => {
  const { language } = useLanguageContext()
  return <span>{BasicMessages[language].pageNotFound}</span>
}