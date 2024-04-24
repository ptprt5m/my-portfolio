import { LanguageToggler } from ".";
import { Menu } from "./Menu";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => (
  <header className="flex w-full items-center z-10">
    <div className="flex px-10 py-6 w-full m-auto justify-between">
      <Menu />
      <div className="flex gap-5">
        <LanguageToggler />
        <ThemeToggler />
      </div>
    </div>
  </header>
);
