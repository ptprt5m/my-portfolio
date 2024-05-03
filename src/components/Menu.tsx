"use client";

import { HeaderLinks } from "@/constants";
import { useLanguageContext } from "@/context";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuLinks = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const { language } = useLanguageContext();
  const pathname = usePathname();
  return (
    <div className={cn("flex gap-8", className)}>
      {Object.values(HeaderLinks[language]).map((link) => (
        <Link
          href={link.href}
          onClick={onClick}
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
