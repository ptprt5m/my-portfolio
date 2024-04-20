'use client'

import { HeaderLinks } from "@/constants";
import { LanguageContext } from "@/context";
import Link from "next/link";
import { useContext } from "react";

export const Menu = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex gap-8">
      {Object.values(HeaderLinks[language]).map((link) => (
        <Link href={link.href} className="transition hover:opacity-60">
          {link.title}
        </Link>
      ))}
    </div>
  );
};
