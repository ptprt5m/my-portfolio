"use client"

import { useState, useEffect } from 'react'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
