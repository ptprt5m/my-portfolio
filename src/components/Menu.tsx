"use client";

import { HeaderLinks } from "@/constants";
import { LanguageContext } from "@/context";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export const Menu = () => {
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {Object.values(HeaderLinks[language]).map((link) => (
        <Link
          href={link.href}
          className={cn("transition hover:opacity-60", {
            "text-slate-400 border-b border-slate-400": pathname === link.href,
          })}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
