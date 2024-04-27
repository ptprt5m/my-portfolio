import type { ReactNode } from "react";

export default function PageLayout({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <h2 className="text-4xl font-semibold">{pageTitle}</h2>
      {children}
    </div>
  );
}
