"use client";

import { Contacts } from "@/constants";
import { LanguageContext } from "@/context";
import { Mail, Telegram, Location, GitHub } from "@/svg";
import Image from "next/image";
import { useContext } from "react";
import { Animation } from "./Animation";

export const MainCard = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-14 relative">
      <div className="flex justify-between w-full gap-10">
        <Animation x={-100} speed={2}>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-semibold">
              {Contacts[language].firstName} <br />
              {Contacts[language].lastName}
            </span>
            <span className="text-xl ">{Contacts[language].profession}</span>
          </div>
        </Animation>

        <Animation x={100} speed={3}>
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-full bg-white/[.45] dark:bg-slate-500/[.65]">
            <Image src="/avatar.png" width={120} height={120} alt="avatar" />
          </div>
        </Animation>
      </div>
      <Animation y={100} speed={4}>
        <div className="flex gap-1 items-center justify-between bg-white/[.45] dark:bg-white/[.15] py-2 px-6 rounded-xl">
          <div className="flex gap-1.5 items-center">
            <Location />
            <span>{Contacts[language].location}</span>
          </div>
          <span className="flex gap-3 items-center">
            <a
              href={Contacts[language].github}
              className="transition hover:scale-125"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              href={Contacts[language].telegramLink}
              className="transition hover:scale-125"
              target="_blank"
            >
              <Telegram />
            </a>
            <a
              href={`mailto:${Contacts[language].mail}`}
              className="transition hover:scale-125"
              target="_blank"
            >
              <Mail />
            </a>
          </span>
        </div>
      </Animation>
    </div>
  );
};
