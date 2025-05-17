"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient circles
    const circles: Circle[] = []
    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 100,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        hue: Math.random() * 60 + 240, // Purple-ish hues
      })
    }

    const animate = () => {
      // Clear canvas with a slight fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      ctx.fillRect(0, 0, width, height)

      // Draw and update circles
      circles.forEach((circle) => {
        // Move circle
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = width + circle.radius
        if (circle.x > width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = height + circle.radius
        if (circle.y > height + circle.radius) circle.y = -circle.radius

        // Create gradient
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)

        const isDark = document.documentElement.classList.contains("dark")

        if (isDark) {
          gradient.addColorStop(0, `hsla(${circle.hue}, 80%, 60%, 0.1)`)
          gradient.addColorStop(1, `hsla(${circle.hue}, 80%, 60%, 0)`)
        } else {
          gradient.addColorStop(0, `hsla(${circle.hue}, 80%, 60%, 0.2)`)
          gradient.addColorStop(1, `hsla(${circle.hue}, 80%, 60%, 0)`)
        }

        // Draw circle
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30 dark:opacity-10" />
}

interface Circle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  hue: number
}
