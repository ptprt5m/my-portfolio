import Image from "next/image";
import { FC } from "react";
import { CardWrapper } from "./CardWrapper";

interface IPortfolioCardProps {
  id: number;
  url: string;
  img: string;
  title: string;
  desc: string;
  stack: string[];
}
export const PortfolioCard: FC<IPortfolioCardProps> = ({
  id,
  url,
  img,
  title,
  desc,
  stack,
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
        <span className="font-medium text-xl">{title}</span>
        <span className="text-base font-light">{desc}</span>
        <div className="flex gap-2 flex-wrap">
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
