"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Dot {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
}

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        // Google/Gemini colors with opacity
        const colors = [
            "rgba(26, 115, 232, 0.4)", // Google Blue
            "rgba(234, 67, 53, 0.4)", // Google Red
            "rgba(251, 188, 5, 0.4)", // Google Yellow
            "rgba(52, 168, 83, 0.4)", // Google Green
        ]

        // Create dots
        const dotCount = 40
        const dots: Dot[] = []

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 2, // 2-6px
                speedX: (Math.random() - 0.5) * 0.3, // Slow movement
                speedY: (Math.random() - 0.5) * 0.3,
                color: colors[Math.floor(Math.random() * colors.length)],
            })
        }

        // Animation loop
        let animationFrameId: number

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            dots.forEach((dot) => {
                // Update position
                dot.x += dot.speedX
                dot.y += dot.speedY

                // Wrap around edges
                if (dot.x < 0) dot.x = canvas.width
                if (dot.x > canvas.width) dot.x = 0
                if (dot.y < 0) dot.y = canvas.height
                if (dot.y > canvas.height) dot.y = 0

                // Draw dot
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
                ctx.fillStyle = dot.color
                ctx.fill()

                // Add subtle glow
                ctx.shadowBlur = 10
                ctx.shadowColor = dot.color
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    )
}
