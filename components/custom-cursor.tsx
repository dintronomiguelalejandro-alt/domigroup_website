"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const cursor = ref.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      setVisible(true)
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`

      const target = e.target as HTMLElement
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
    document.documentElement.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-[opacity,width,height] duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      } ${hovering ? "size-8" : "size-4"}`}
    />
  )
}
