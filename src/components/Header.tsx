"use client";

import { useState } from "react";
import { BurgerBtnIcon } from "./BurgerBtnIcon";
import { LanguageToggler } from "./LanguageToggle";
import { MenuLinks } from "./Menu";
import { ThemeToggler } from "./ThemeToggler";
import { CloseIcon } from "./CloseIcon";
import { Animation } from "./Animation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <header className="flex w-full items-center">
      <div className="flex px-10 py-6 w-full m-auto justify-between z-20">
        <div className="hidden lg:block w-full">
          <MenuLinks />
        </div>

        <div className="flex gap-5 items-center w-full justify-between lg:justify-end">
          <LanguageToggler />
          <ThemeToggler />
          <div className="block lg:hidden">
            <BurgerBtnIcon onClick={openMobileMenu} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 px-10 py-6 w-full flex flex-col items-center text-center h-screen bg-zinc-100 dark:bg-slate-800 z-30">
          <div className="w-full flex justify-end">
            <CloseIcon onClick={closeMobileMenu} />
          </div>
          <MenuLinks className="absolute top-0 h-screen flex-col items-center justify-center" onClick={closeMobileMenu} />
        </div>
      )}
    </header>
  );
};
