"use client";

import { useEffect, useState } from "react";
import { LanguageToggler } from "./LanguageToggle";
import { MenuLinks } from "./Menu";
import { ThemeToggler } from "./ThemeToggler";
import { cn } from "@/utils";

export const Header = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <header
      className={cn("flex z-20 left-0 fixed top-0 w-full items-center", {
        "bg-slate-50 dark:bg-slate-800 transition-colors duration-500 ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]":
          colorChange,
      })}
    >
      <div className="flex px-10 py-4 md:py-6 w-full m-auto justify-between z-20 max-w-screen-xl">
        <div className="hidden md:block w-full">
          <MenuLinks />
        </div>

        <div className="flex gap-5 items-center w-full md:w-auto justify-between md:justify-end">
          <LanguageToggler />
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};
