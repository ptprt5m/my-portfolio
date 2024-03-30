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
        className="right-[200px] top-[400px]"
        src="/circle-1.png"
        width={100}
        height={100}
      />
      <FlyingElement
        x={x}
        y={y}
        className="left-[200px] top-[200px]"
        src="/circle-2.png"
        width={170}
        height={170}
      />
      <FlyingElement
        x={x}
        y={y}
        className="right-[600px] top-[220px]"
        src="/circle-3.png"
        width={220}
        height={220}
      />
      <FlyingElement
        x={x}
        y={y}
        className="left-[600px] top-[500px]"
        src="/circle-4.png"
        width={300}
        height={270}
      />
    </>
  );
};
