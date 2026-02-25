import Image from "next/image"
import type { FC } from "react"
import { CardWrapper } from "./CardWrapper"
import { StarEmptySVG, StarSVG } from "@/svg"
import { cn } from "@/utils"
import { BasicMessages } from "@/constants"

interface IPortfolioCardProps {
  id: number;
  url: string;
  img: string;
  title: string;
  desc: string;
  stack: string[];
  status: {
    isPersonal: boolean;
    title: string;
  };
  year: string;
  isDisabled?: boolean;
  inProgress: boolean;
  language: string;
}
export const PortfolioCard: FC<IPortfolioCardProps> = ({
  id,
  url,
  img,
  title,
  desc,
  stack,
  status,
  year,
  isDisabled,
  inProgress,
  language,
}) => (
  <a
    key={id}
    target="_blank"
    rel="noreferrer"
    href={isDisabled || inProgress ? undefined : url}
    onClick={(e) => isDisabled || inProgress && e.preventDefault()}
    className={cn("relative rounded-2xl", {
      "pointer-events-none cursor-not-allowed": isDisabled || inProgress,
    })}
    aria-disabled={isDisabled || inProgress}
  >
    <CardWrapper className="flex flex-col p-0 h-full rounded-2xl will-change-transform transform scale-[1] relative overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="py-5 px-7 flex flex-col gap-2">
        <span className="font-medium text-xl ">{title}</span>
        <span className="text-base font-light">{desc}</span>
        <div className="flex gap-2 pb-1 items-center">
          <span className="text-sm font-normal text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-1.5">
            {status.isPersonal ? (
              <StarSVG size={14} />
            ) : (
              <StarEmptySVG size={14} />
            )}
            {status.title}
          </span>
          <span className="rounded-full p-1 bg-slate-400 dark:bg-slate-500"></span>
          <span className="text-sm font-medium">{year}</span>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          {stack?.map((item, i) => (
            <span
              key={i}
              className="text-sm font-normal rounded-lg py-0.5 px-3 bg-slate-300 dark:bg-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {isDisabled && (
        <>
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 opacity-70 rounded-2xl z-10 pointer-events-auto" />
          <div
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto px-4 top-1/4 -translate-y-1/2"
          >
            <div className="max-w-52 sm:max-w-64 text-center p-5 bg-white dark:bg-slate-700 shadow-xl rounded-xl">
              {BasicMessages[language].projectClosed}
            </div>
          </div>
        </>
      )}
      {inProgress && (
        <>
          <div className="absolute inset-0 backdrop-blur-xl bg-zinc-100/40 dark:bg-zinc-900/40 rounded-2xl z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <div className="text-center py-3 px-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-xl rounded-xl border border-slate-200 dark:border-slate-600">
              <span className="text-lg font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                {BasicMessages[language].inProgress}
              </span>
            </div>
          </div>
        </>
      )}
    </CardWrapper>
  </a>
)
