'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const isHoveringLink = useRef(false)
  const isMouseDown = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorOutline = cursorOutlineRef.current

    if (!cursor || !cursorOutline) return

    // Check if device has touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
      gsap.to(cursorOutline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    }

    const handleMouseDown = () => {
      isMouseDown.current = true
      gsap.to(cursorOutline, {
        scale: 0.8,
        duration: 0.2,
      })
    }

    const handleMouseUp = () => {
      isMouseDown.current = false
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.2,
      })
    }

    const handleLinkHoverStart = () => {
      isHoveringLink.current = true
      gsap.to(cursorOutline, {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const handleLinkHoverEnd = () => {
      isHoveringLink.current = false
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.3,
      })
    }

    // Add event listeners
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Add hover listeners to all links and buttons
    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart)
      link.addEventListener('mouseleave', handleLinkHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart)
        link.removeEventListener('mouseleave', handleLinkHoverEnd)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  )
} 