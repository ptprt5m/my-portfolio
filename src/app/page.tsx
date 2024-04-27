import { FlyingElements, MainCard } from "@/components";
import { CardWrapper } from "@/components";

export default function Home() {
  return (
    <div className="absolute top-0 z-10 h-screen flex flex-col items-center justify-center">
      <CardWrapper size="medium">
        <MainCard />
      </CardWrapper>
      <FlyingElements />
    </div>
  );
}
