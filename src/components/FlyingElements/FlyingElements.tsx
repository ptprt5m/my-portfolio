"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { FlyingElement } from "./FlyingElement";

export const FlyingElements = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <FlyingElement
        x={x}
        y={y}
        className="right-0 top-[50px]"
        src="/circle-1.png"
        width={100}
        height={100}
      />
      <FlyingElement
        x={x}
        y={y}
        className="left-0 -top-[150px]"
        src="/circle-2.png"
        width={170}
        height={170}
      />
      <FlyingElement
        x={x}
        y={y}
        className="right-[400px] -top-[100px]"
        src="/circle-3.png"
        width={220}
        height={220}
      />
      <FlyingElement
        x={x}
        y={y}
        className="left-[380px] top-[180px]"
        src="/circle-4.png"
        width={300}
        height={270}
      />
    </>
  );
};
