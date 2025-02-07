export const BurgerBtnIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    className="flex flex-col w-max gap-1 items-end cursor-pointer transition hover:opacity-75"
    onClick={onClick}
  >
    <span className="h-1 w-8 bg-slate-700 dark:bg-slate-200 rounded-xl"></span>
    <span className="h-1 w-7 bg-slate-700 dark:bg-slate-200 rounded-xl"></span>
    <span className="h-1 w-6 bg-slate-700 dark:bg-slate-200 rounded-xl"></span>
  </div>
)
