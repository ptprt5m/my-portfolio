"use client"

import { Skills } from "@/constants"
import { useLanguageContext } from "@/context"
import PageLayout from "./layout"
import { CardWrapper } from "../CardWrapper"
import { useState } from "react"
import { Animation } from "../Animation"
import { ScaleAnimation } from "../ScaleAnimation"
import { CircleProgress } from "../CircleProgress"
import { ClickSelect, Cursor } from "@/svg"
import { motion } from "framer-motion"

export const SkillsPage = () => {
  const { language } = useLanguageContext()
  const [selectCategory, setSelectCategory] = useState(
    Skills[language].items[0].id
  )
  const [isCursorVisible, setIsCursorVisible] = useState(true)

  const toggleSelectCategory = (category: number) => {
    setSelectCategory(category)
    setIsCursorVisible(false)
  }

  return (
    <PageLayout pageTitle={Skills[language].title}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {Skills[language].items.map((category, index) => (
          <Animation
            key={category.id}
            className="w-full"
            speed={(category.id + 1) / 2}
            x={-100}
          >
            <div className="flex flex-col gap-3 w-full max-w-full md:hidden">
              <div
                className="w-full h-full flex flex-col items-center"
                onClick={() => toggleSelectCategory(category.id)}
              >
                <span className="text-xl">{category.title}</span>
                <CircleProgress progress={category.level} />
              </div>
            </div>
            <CardWrapper
              key={category.id}
              className="hidden md:flex cursor-pointer w-full max-w-full"
              onClick={() => toggleSelectCategory(category.id)}
            >
              <div className="w-full h-full flex flex-col items-center gap-5">
                <span className="text-xl">{category.title}</span>
                <CircleProgress progress={category.level} />
              </div>
            </CardWrapper>

            {isCursorVisible && index === 1 && (
              <motion.div
                className="relative pointer-events-none"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2.5,
                }}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.1, 0.6, 1],
                    duration: 3,
                  }}
                >
                  <ClickSelect className="absolute bottom-2 right-2 md:bottom-7 md:right-7" />
                </motion.div>
                <Cursor className="absolute bottom-0 right-0 md:bottom-5 md:right-5 " />
              </motion.div>
            )}
          </Animation>
        ))}
      </div>
      <Animation speed={Skills[language].items.length} y={100}>
        <div className="max-w-max md:py-6 md:px-10">
          {Skills[language].items.map(
            (category) =>
              category.id === selectCategory && (
                <div key={category.id} className="flex gap-5 flex-wrap">
                  {category.items.map((skill, i) => (
                    <ScaleAnimation key={i} speed={(i + 1) / 3}>
                      <span
                        key={i}
                        className="py-1 px-4 bg-slate-300 dark:bg-slate-600 rounded-xl"
                      >
                        {skill}
                      </span>
                    </ScaleAnimation>
                  ))}
                </div>
              )
          )}
        </div>
      </Animation>
    </PageLayout>
  )
}
