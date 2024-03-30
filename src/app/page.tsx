import { FlyingElements, MainCard } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center from-zinc-200 to-zinc-50 bg-gradient-to-tl dark:from-slate-900 dark:to-slate-700">
      <MainCard />
      <FlyingElements />
    </main>
  );
}
