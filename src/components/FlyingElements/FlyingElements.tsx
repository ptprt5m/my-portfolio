"use client"

import { useMousePosition } from "@/hooks"
import { FlyingElement } from "./FlyingElement"
import { Animation } from "../Animation"

export const FlyingElements = () => {
  const { x, y } = useMousePosition()

  return (
    <>
      <Animation speed={x / 10}>
        <FlyingElement
          x={x}
          y={y}
          className="-right-[400px] top-[600px]"
          src="/circle-1.png"
          width={100}
          height={100}
        />
      </Animation>

      <Animation speed={x / 10}>
        <FlyingElement
          x={x}
          y={y}
          className="-left-[500px] top-[200px]"
          src="/circle-2.png"
          width={170}
          height={170}
        />
      </Animation>
      <Animation speed={x / 10}>
        <FlyingElement
          x={x}
          y={y}
          className="-right-[100px] top-[200px]"
          src="/circle-3.png"
          width={220}
          height={220}
        />
      </Animation>
      <Animation speed={x / 10}>
        <FlyingElement
          x={x}
          y={y}
          className="-left-[160px] top-[500px]"
          src="/circle-4.png"
          width={300}
          height={270}
        />
      </Animation>
    </>
    //   <>
    //   <FlyingElement
    //     x={x}
    //     y={y}
    //     className="right-[300px] top-[600px]"
    //     src="/circle-1.png"
    //     width={100}
    //     height={100}
    //   />
    //   <FlyingElement
    //     x={x}
    //     y={y}
    //     className="left-[300px] top-[150px]"
    //     src="/circle-2.png"
    //     width={170}
    //     height={170}
    //   />
    //   <FlyingElement
    //     x={x}
    //     y={y}
    //     className="right-[550px] top-[200px]"
    //     src="/circle-3.png"
    //     width={220}
    //     height={220}
    //   />
    //   <FlyingElement
    //     x={x}
    //     y={y}
    //     className="left-[550px] top-[550px]"
    //     src="/circle-4.png"
    //     width={300}
    //     height={270}
    //   />
    // </>
  )
}
