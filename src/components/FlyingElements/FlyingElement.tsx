"use client"

import { cn } from "@/utils"
import Image from "next/image"
import { type FC, useEffect, useState } from "react"

interface IFlyingElementProps {
  x: number;
  y: number;
  className?: string;
  src?: string;
  width?: number;
  height?: number;
}

export const FlyingElement: FC<IFlyingElementProps> = ({
  x,
  y,
  className,
  src,
  width,
  height,
}) => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const generateRandomOffset = () =>
    Math.floor(Math.random() * (50 - 15 + 1)) + 15

  const [offset, setOffset] = useState(generateRandomOffset())

  useEffect(() => {
    setOffset(generateRandomOffset())
  }, [])

  const offsetX = (windowWidth / 2 - x) / offset
  const offsetY = (windowHeight / 2 - y) / offset
  return (
    <Image
      src={src ?? "/circle.png"}
      width={width ?? 100}
      height={height ?? 100}
      alt="figure"
      className={cn("absolute", className ?? "top-0 left-0")}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    />
  )
}
