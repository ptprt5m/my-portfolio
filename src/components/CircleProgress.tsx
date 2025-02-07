"use client"

import { useTheme } from "@/hooks"
import { ThemeVariants } from "@/models"
import { motion } from "framer-motion"

export const CircleProgress = ({
  progress,
  size = 150,
}: {
  progress: number;
  size?: number;
}) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeWidth = 8

  const { theme } = useTheme()

  return (
    <svg width={size} height={size} className="circle transform -rotate-90">
      <circle
        stroke={theme === ThemeVariants.light ? "#cbd5e1" : "#475569"}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <motion.circle
        stroke={theme === ThemeVariants.light ? "#475569" : "#E2E8F0"}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
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
        fontSize="16px"
        dy=".3em"
        className="transform origin-center rotate-90"
      >
        {progress}%
      </text>
    </svg>
  )
}
