"use client";

import type { IBasicProps } from "@/models";
import { cn } from "@/utils";
import { type FC, useEffect, useState } from "react";
import Image from "next/image";

export const ThemeToggler: FC<IBasicProps> = ({ className }) => {
  const [theme, setTheme] = useState<string | null>(null);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || "light";
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme);
      document.documentElement.className = theme;
    }
  }, [theme]);

  if (!theme) { 
   return null
  }

  return (
    <button onClick={changeTheme}>
      <div className={cn("transition hover:opacity-75", className)}>
        <Image
          src={theme === "light" ? "/moon.png" : "/sun.png"}
          width={30}
          height={30}
          alt={`${theme} theme switch`}
        />
      </div>
    </button>
  )
};
