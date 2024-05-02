"use client";

import { HeaderLinks } from "@/constants";
import { useLanguageContext } from "@/context";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const { language } = useLanguageContext();
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {Object.values(HeaderLinks).map((link) => (
        <Link
          href={link.href}
          className={cn("transition hover:opacity-60", {
            "text-slate-400": pathname === link.href,
          })}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
