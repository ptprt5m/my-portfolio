"use client";

import { HeaderLinks } from "@/constants";
import { useLanguageContext } from "@/context";
import { AboutSVG, ExpSVG, HomeSVG, PortfolioSVG, SkillsSVG } from "@/svg";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface IICONS {
  [key: string]: ReactNode;
}

const ICONS: IICONS = {
  HomeSVG: <HomeSVG />,
  AboutSVG: <AboutSVG />,
  SkillsSVG: <SkillsSVG />,
  ExpSVG: <ExpSVG />,
  PortfolioSVG: <PortfolioSVG />,
};

export const MenuLinks = ({
  className,
  onClick,
  type = "desktop",
}: {
  className?: string;
  onClick?: () => void;
  type?: "desktop" | "mobile";
}) => {
  const { language } = useLanguageContext();
  const pathname = usePathname();
  return (
    <div className={cn("flex gap-8 justify-between md:justify-start w-full", className)}>
      {Object.values(HeaderLinks[language]).map((link) => (
        <Link
          key={link.title}
          href={link.href}
          onClick={onClick}
          className={cn("transition hover:opacity-60", {
            "text-slate-400": pathname === link.href,
          })}
        >
          {type === "desktop" ? link.title : ICONS[link.icon]}
        </Link>
      ))}
    </div>
  );
};
