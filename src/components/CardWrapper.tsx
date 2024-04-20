"use client";

import { cn } from "@/utils";
import { FC, type ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface ICardWrapperProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
}

export const CardWrapper: FC<ICardWrapperProps> = ({
  children,
  size = "small",
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const tilt = new VanillaTilt(cardRef.current, {
        max: 10,
        speed: 1000,
        glare: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        "max-glare": 0.3,
        transition: true,
      });

      return () => tilt.destroy();
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "w-full m-auto max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border p-10 z-10 rounded-[40px] bg-white bg-opacity-30 backdrop-blur transition",
        {
          "max-w-lg": size === "small",
          "max-w-xl": size === "medium",
          "max-w-2xl": size === "large",
        }
      )}
    >
      <div
        className="absolute rounded-[40px] inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: 'url("/bg.jpeg")' }}
      ></div>

      {children}
    </div>
  );
};
