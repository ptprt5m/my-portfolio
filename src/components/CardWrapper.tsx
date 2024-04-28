"use client";

import { cn } from "@/utils";
import { FC, type ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface ICardWrapperProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  useRefLogic?: boolean;
  onClick?: () => void;
}

export const CardWrapper: FC<ICardWrapperProps> = ({
  children,
  size = "small",
  className,
  useRefLogic = true,
  onClick
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && useRefLogic) {
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
        "w-full m-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)] border p-10 rounded-[40px] bg-white/[.3] dark:bg-white/[.05] backdrop-blur transition dark:border-slate-400 overflow-hidden",
        {
          "max-w-lg": size === "small",
          "max-w-xl": size === "medium",
          "max-w-2xl": size === "large",
        },
        className
      )}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: 'url("/bg.jpeg")' }}
      ></div>

      {children}
    </div>
  );
};
