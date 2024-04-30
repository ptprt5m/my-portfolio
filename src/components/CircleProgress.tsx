"use client";

import { useTheme } from "@/hooks";
import { ThemeVariants } from "@/models";
import { motion } from "framer-motion";

export const CircleProgress = ({ progress }: { progress: number }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 10;

  const { theme } = useTheme();

  return (
    <svg width="150" height="150" className="circle transform -rotate-90">
      <circle
        stroke={theme === ThemeVariants.light ? "#cbd5e1" : "#475569"}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx="75"
        cy="75"
      />
      <motion.circle
        stroke={theme === ThemeVariants.light ? "#475569" : "#E2E8F0"}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx="75"
        cy="75"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{
          strokeDashoffset: circumference - (progress / 100) * circumference,
        }}
        transition={{ duration: 1 }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill={theme === ThemeVariants.light ? "#334454" : "#E2E8F0"}
        fontSize="20px"
        dy=".3em"
        className="transform origin-center rotate-90"
      >
        {progress}%
      </text>
    </svg>
  );
};