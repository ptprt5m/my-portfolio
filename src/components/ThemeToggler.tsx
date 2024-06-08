"use client";

import { useTheme } from "@/hooks";
import type { IBasicProps } from "@/models";
import { cn } from "@/utils";
import Image from "next/image";
import type { FC } from "react";

export const ThemeToggler: FC<IBasicProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  if (!theme) {
    return null;
  }

  return (
    <button onClick={toggleTheme}>
      <div className={cn("transition hover:opacity-75", className)}>
        <Image
          src={theme === "light" ? "/moon.png" : "/sun.png"}
          width={27}
          height={27}
          alt={`${theme} theme switch`}
        />
      </div>
    </button>
  );
};
