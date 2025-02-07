import { MenuLinks } from "./Menu"

export const HeaderMobile = () => {
  return (
    <div className="flex md:hidden pt-5 pb-5 px-10 w-full fixed bottom-0 z-30 bg-slate-50 dark:bg-slate-800 transition-colors duration-500 ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <MenuLinks type="mobile" />
    </div>
  )
}
