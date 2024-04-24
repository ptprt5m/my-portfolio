export const EmptyPortfolioCard = () => (
  <a className="border border-dashed border-slate-400 dark:border-slate-500 overflow-hidden rounded-xl flex flex-col cursor-not-allowed">
    <div className="w-full h-48 bg-slate-300 dark:bg-slate-700 flex justify-center align-middle items-center">
        <span className="text-slate-400">soon...</span>
    </div>
    <div className="py-5 px-7 flex flex-col gap-2">
      <span className="font-semibold text-xl w-full h-5 rounded-xl bg-slate-300 dark:bg-slate-700"></span>
      <span className="text-base font-light w-full h-16 rounded-xl bg-slate-300 dark:bg-slate-700"></span>
      <div className="flex gap-2 justify-between">
        <span className="text-sm font-normal rounded-lg py-0.5 px-3 bg-slate-300 dark:bg-slate-700 w-32 h-5 text-white"></span>
        <span className="text-sm font-normal rounded-lg py-0.5 px-3 bg-slate-300 dark:bg-slate-700 w-16 h-5 text-white"></span>
        <span className="text-sm font-normal rounded-lg py-0.5 px-3 bg-slate-300 dark:bg-slate-700 w-24 h-5 text-white"></span>
      </div>
    </div>
  </a>
);
