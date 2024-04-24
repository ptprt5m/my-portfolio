import Image from "next/image";
import { FC } from "react";

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
  <a
    key={id}
    href={url}
    target="_blank"
    className="border border-lightgrey shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-slate-500 overflow-hidden rounded-xl flex flex-col hover:opacity-75 transition"
  >
    <Image
      src={img}
      alt={title}
      width={300}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="py-5 px-7 flex flex-col gap-2">
      <span className="font-semibold text-xl">{title}</span>
      <span className="text-base font-light">{desc}</span>
      <div className="flex gap-2">
        {stack?.map((item, i) => (
          <span
            key={i}
            className="text-sm font-normal rounded-lg py-0.5 px-3 bg-slate-500 text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </a>
);
