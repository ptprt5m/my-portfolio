import { FlyingElements, MainCard, Animation } from "@/components";
import { CardWrapper } from "@/components";

export default function Home() {
  return (
    <div className="absolute top-0 h-screen flex flex-col items-center justify-center">
      <Animation y={-100}>
        <CardWrapper size="medium">
          <MainCard />
        </CardWrapper>
      </Animation>
      {/* <FlyingElements /> */}
    </div>
  );
}
