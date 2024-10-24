import Image from "next/image";
import type { FC } from "react";
import { CardWrapper } from "./CardWrapper";
import { StarEmptySVG, StarSVG } from "@/svg";
import { cn } from "@/utils";

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
}
export const PortfolioCard: FC<IPortfolioCardProps> = ({
  id,
  url,
  img,
  title,
  desc,
  stack,
  status,
}) => (
  <a key={id} href={url} target="_blank">
    <CardWrapper className="flex flex-col p-0 h-full rounded-2xl">
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
        <span className="text-sm font-normal text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-1.5 pb-1">
          {status.isPersonal ? (
            <StarSVG size={14} />
          ) : (
            <StarEmptySVG size={14} />
          )}
          {status.title}
        </span>
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
    </CardWrapper>
  </a>
);
