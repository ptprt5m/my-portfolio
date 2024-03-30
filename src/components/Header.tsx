import { Menu } from "./Menu";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => (
  <header className="flex fixed w-full items-center">
    <div className="flex max-w-screen-xl w-full m-auto my-8 justify-between">
      <Menu />
      <ThemeToggler />
    </div>
  </header>
);
