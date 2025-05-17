"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="overflow-hidden">
      <h1
        className={cn(
          "transform transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          className,
        )}
      >
        {text}
      </h1>
    </div>
  )
}
