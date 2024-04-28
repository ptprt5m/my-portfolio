"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ScaleAnimation = ({
  children,
  speed = 1,
  className,
}: {
  children?: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (speed: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: speed * 0.2 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={speed}
      className={className}
    >
      {children}
    </motion.div>
  );
};
