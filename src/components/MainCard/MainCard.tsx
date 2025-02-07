"use client"

import { Contacts } from "@/constants"
import { useLanguageContext } from "@/context"
import { Location } from "@/svg"
import Image from "next/image"
import { Animation } from "../Animation"
import { SocialLinks } from "./SocialLinks"

export const MainCard = () => {
  const { language } = useLanguageContext()
  return (
    <div className="flex flex-col gap-7 sm:gap-14 relative">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between w-full gap-5 sm:gap-10">
        <Animation x={-100} speed={2} className="w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start gap-1">
            <span className="text-3xl sm:text-4xl font-semibold w-full sm:w-min">
              {Contacts[language].firstName} {Contacts[language].lastName}
            </span>
            <span className="text-xl">{Contacts[language].profession}</span>
          </div>
        </Animation>

        <Animation x={100} speed={3}>
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 w-max rounded-full bg-white/[.45] dark:bg-slate-500/[.65]">
            <Image src="/avatar.png" width={120} height={120} alt="avatar" />
          </div>
        </Animation>
      </div>
      <Animation y={100} speed={4}>
        <div className="sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col sm:flex-row gap-2 items-center justify-between sm:bg-white/[.45] sm:dark:bg-white/[.15] py-2 px-6 rounded-xl">
          <div className="flex gap-1.5 items-center">
            <Location />
            <span>{Contacts[language].location}</span>
          </div>
          <SocialLinks />
        </div>
      </Animation>
    </div>
  )
}
