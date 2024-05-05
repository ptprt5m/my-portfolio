import { FlyingElements, MainCard, Animation } from "@/components";
import { CardWrapper } from "@/components";

export default function Home() {
  return (
    <div className="absolute top-0 h-screen flex flex-col items-center justify-center w-full max-w-96 sm:max-w-none">
      <Animation y={-100} className="z-20 w-full hidden sm:block">
        <CardWrapper size="medium" className="">
          <MainCard />
        </CardWrapper>
      </Animation>
      <Animation y={-100} className="z-20 w-full block sm:hidden">
        <MainCard />
      </Animation>
      {/* <FlyingElements /> */}
    </div>
  );
}
