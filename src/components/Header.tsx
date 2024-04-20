import { LanguageToggler } from ".";
import { Menu } from "./Menu";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => (
  <header className="flex fixed w-full items-center">
    <div className="flex max-w-screen-xl px-10 py-6 w-full m-auto justify-between">
      <Menu />
      <div className="flex gap-5">
        <LanguageToggler />
        <ThemeToggler />
      </div>
    </div>
  </header>
);
