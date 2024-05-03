"use client";

import { Skills } from "@/constants";
import { useLanguageContext } from "@/context";
import PageLayout from "./layout";
import { CardWrapper } from "../CardWrapper";
import { useEffect, useState } from "react";
import { Animation } from "../Animation";
import { ScaleAnimation } from "../ScaleAnimation";
import { CircleProgress } from "../CircleProgress";
import { ClickSelect, Cursor } from "@/svg";
import { motion, useAnimation } from "framer-motion";

export const SkillsPage = () => {
  const { language } = useLanguageContext();
  const [selectCategory, setSelectCategory] = useState(
    Skills[language].items[0].id
  );
  const toggleSelectCategory = (category: number) => {
    setSelectCategory(category);
  };

  // const controls = useAnimation();
  // const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     controls.start({
  //       opacity: 1,
  //       transition: { duration: 0.5 },
  //     });
  //     const interval = setInterval(() => {
  //       controls.start({
  //         opacity: [1, 0, 1],
  //         transition: { duration: 0.5 },
  //       });
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [controls]);

  // const handleClick = () => {
  //   setClicked(true);
  //   controls.start({
  //     opacity: 0,
  //     transition: { duration: 0.5 },
  //   });
  // };

  return (
    <PageLayout pageTitle={Skills[language].title}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full">
        {Skills[language].items.map((category, index) => (
          <Animation className="w-full" speed={(category.id + 1) / 2} x={-100}>
            <CardWrapper
              key={category.id}
              className="cursor-pointer"
              onClick={() => toggleSelectCategory(category.id)}
            >
              <div className="w-full h-full flex flex-col items-center gap-5">
                <span className="text-xl">{category.title}</span>
                <CircleProgress progress={category.level} />
              </div>
              {/* {!clicked && index === 1 && (
                <div>
                  <motion.div animate={controls}>
                    <ClickSelect className="absolute bottom-7 right-7" />
                  </motion.div>
                  <Cursor className="absolute bottom-5 right-5" />
                </div>
              )} */}
            </CardWrapper>
          </Animation>
        ))}
      </div>
      <Animation speed={Skills[language].items.length} y={100}>
        <div className="max-w-max py-6 px-10">
          {Skills[language].items.map(
            (category) =>
              category.id === selectCategory && (
                <div className="flex gap-5 flex-wrap">
                  {category.items.map((skill, i) => (
                    <ScaleAnimation speed={(i + 1) / 3}>
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
  );
};
