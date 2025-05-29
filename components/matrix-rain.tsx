"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Matrix characters
    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charArray = chars.split("")

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor((Math.random() * canvas.height) / fontSize)
    }

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(26, 27, 38, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#7aa2f7"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
      // Recalculate drops for new canvas size
      const newColumns = Math.floor(canvas.width / fontSize)
      drops.length = newColumns
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.floor((Math.random() * canvas.height) / fontSize)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
