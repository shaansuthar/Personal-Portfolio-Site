import { useEffect, useRef } from 'react'

import { clamp } from '../utils'

export function HeroBlueprintCanvas({
  active,
  reducedMotion,
}: {
  active: boolean
  reducedMotion: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const pointerRef = useRef({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    engaged: false,
    pulse: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let dpr = 1

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const setFromEvent = (clientX: number, clientY: number) => {
      const rect = wrap.getBoundingClientRect()
      pointerRef.current.targetX = clamp((clientX - rect.left) / rect.width)
      pointerRef.current.targetY = clamp((clientY - rect.top) / rect.height)
      pointerRef.current.engaged = true
    }

    const onPointerMove = (event: PointerEvent) => {
      setFromEvent(event.clientX, event.clientY)
    }

    const onPointerLeave = () => {
      pointerRef.current.targetX = 0.5
      pointerRef.current.targetY = 0.5
      pointerRef.current.engaged = false
    }

    const drawGrid = (time: number) => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const pointer = pointerRef.current
      const lerp = reducedMotion ? 1 : 0.12
      pointer.x += (pointer.targetX - pointer.x) * lerp
      pointer.y += (pointer.targetY - pointer.y) * lerp
      pointer.pulse = time * 0.0012

      const px = pointer.x * width
      const py = pointer.y * height
      const radius = Math.min(width, height) * (pointer.engaged ? 0.36 : 0.24)

      ctx.save()
      ctx.beginPath()
      ctx.arc(px, py, radius, 0, Math.PI * 2)
      ctx.clip()

      ctx.fillStyle = 'rgba(3, 14, 20, 0.10)'
      ctx.fillRect(0, 0, width, height)

      const minor = 12 * dpr
      const major = minor * 4

      ctx.lineWidth = 1
      for (let x = 0; x <= width; x += minor) {
        const isMajor = x % major === 0
        ctx.strokeStyle = isMajor ? 'rgba(40, 200, 255, 0.28)' : 'rgba(40, 200, 255, 0.10)'
        ctx.beginPath()
        ctx.moveTo(x + 0.5, 0)
        ctx.lineTo(x + 0.5, height)
        ctx.stroke()
      }
      for (let y = 0; y <= height; y += minor) {
        const isMajor = y % major === 0
        ctx.strokeStyle = isMajor ? 'rgba(40, 200, 255, 0.28)' : 'rgba(40, 200, 255, 0.10)'
        ctx.beginPath()
        ctx.moveTo(0, y + 0.5)
        ctx.lineTo(width, y + 0.5)
        ctx.stroke()
      }

      for (let i = 0; i < 28; i++) {
        const angle = (i / 28) * Math.PI * 2
        const ring = radius * (0.38 + ((i % 7) / 10))
        const dotX = px + Math.cos(angle + pointer.pulse * 0.18) * ring
        const dotY = py + Math.sin(angle + pointer.pulse * 0.18) * ring
        ctx.fillStyle = i % 6 === 0 ? 'rgba(39, 228, 107, 0.55)' : 'rgba(40, 200, 255, 0.38)'
        ctx.beginPath()
        ctx.arc(dotX, dotY, 1.15 * dpr, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.strokeStyle = 'rgba(255, 138, 0, 0.5)'
      ctx.lineWidth = 1.25 * dpr
      ctx.beginPath()
      ctx.arc(px, py, radius * 0.78, 0, Math.PI * 2)
      ctx.stroke()

      ctx.strokeStyle = 'rgba(40, 200, 255, 0.85)'
      ctx.beginPath()
      ctx.moveTo(px - radius * 0.18, py)
      ctx.lineTo(px + radius * 0.18, py)
      ctx.moveTo(px, py - radius * 0.18)
      ctx.lineTo(px, py + radius * 0.18)
      ctx.stroke()

      ctx.restore()

      ctx.strokeStyle = active ? 'rgba(40, 200, 255, 0.24)' : 'rgba(40, 200, 255, 0.10)'
      ctx.lineWidth = 1 * dpr
      ctx.beginPath()
      ctx.arc(px, py, radius + 8 * dpr, 0, Math.PI * 2)
      ctx.stroke()
    }

    const frame = (time: number) => {
      drawGrid(time)
      raf = window.requestAnimationFrame(frame)
    }

    resize()
    raf = window.requestAnimationFrame(frame)

    wrap.addEventListener('pointermove', onPointerMove)
    wrap.addEventListener('pointerdown', onPointerMove)
    wrap.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('resize', resize)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      wrap.removeEventListener('pointermove', onPointerMove)
      wrap.removeEventListener('pointerdown', onPointerMove)
      wrap.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', resize)
    }
  }, [active, reducedMotion])

  return (
    <div ref={wrapRef} className="hero-headshot-canvas-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-headshot-canvas" />
    </div>
  )
}
