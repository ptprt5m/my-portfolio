import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { cn } from "@/utils";
import { LanguageProvider } from "@/context";
import { ThemeProvider } from "@/context/themeCtx";
import { HeaderMobile } from "@/components/HeaderMobile";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roman Shcheglov",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-slate-800 text-base dark:text-slate-100 font-medium sm:text-lg from-zinc-200 to-zinc-50 bg-gradient-to-tl dark:from-slate-900 dark:to-slate-700 min-h-screen max-w-screen-xl m-auto relative",
          font.className
        )}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <HeaderMobile />
            <main className="flex flex-col items-center justify-center h-full">
                {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
