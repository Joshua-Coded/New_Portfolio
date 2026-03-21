'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1.8 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()
    const totalDuration = duration * 1000
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / totalDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, to, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}
