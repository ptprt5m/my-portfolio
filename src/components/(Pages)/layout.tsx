import type { ReactNode } from "react";

export default function PageLayout({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="px-10 pt-20 sm:pt-28 pb-48 w-full flex items-center justify-center h-full">
      <div className="flex flex-col gap-7 sm:gap-10 w-full items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">{pageTitle}</h2>
        {children}
      </div>
    </div>
  );
}
