export const CloseIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    className="flex flex-col w-7 h-7 relative items-center justify-center cursor-pointer origin-center transition hover:opacity-75"
    onClick={onClick}
  >
    <span className="h-1 w-7 absolute bg-slate-700 dark:bg-slate-200 rounded-xl transform rotate-45"></span>
    <span className="h-1 w-7 absolute bg-slate-700 dark:bg-slate-200 rounded-xl transform -rotate-45"></span>
  </div>
);
