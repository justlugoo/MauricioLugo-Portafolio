"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
}

const variants: Record<string, Variants> = {
    "fade-up": {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    },
    "fade-in": {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    },
    "slide-left": {
        hidden: {
            opacity: 0,
            x: 40,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    },
    "slide-right": {
        hidden: {
            opacity: 0,
            x: -40,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    },
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    variant = "fade-up",
}: ScrollRevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1], // Custom easing for smooth animation
            }}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    )
}
