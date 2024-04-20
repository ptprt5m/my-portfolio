"use client";

import { Contacts } from "@/constants";
import { LanguageContext } from "@/context";
import { Mail, Telegram, Location } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export const MainCard = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-14 z-10 relative">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-semibold">
            {Contacts[language].firstName} <br />
            {Contacts[language].lastName}
          </span>
          <span className="text-xl ">{Contacts[language].profession}</span>
        </div>
        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-full bg-white/[.45]">
          <Image src="/avatar.png" width={120} height={120} alt="avatar" />
        </div>
      </div>
      <div className="flex gap-1 items-end justify-between bg-white/[.45] dark:bg-white/[.15] py-2 px-6 rounded-xl">
        <div className="flex gap-2 items-center">
          <Location />
          <span>{Contacts[language].location}</span>
        </div>
        <span className="flex gap-3">
          <Link
            href={Contacts[language].telegramLink}
            className="transition hover:scale-125"
          >
            <Telegram />
          </Link>
          <Link
            href={`mailto:${Contacts[language].mail}`}
            className="transition hover:scale-125"
          >
            <Mail />
          </Link>
        </span>
      </div>
    </div>
  );
};
