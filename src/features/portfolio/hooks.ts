import { type RefObject, useEffect, useState } from 'react'

import type { ThemeMode } from './types'

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return prefersReducedMotion
}

export function useViewportWidth() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}

export function useThemeMode(): [ThemeMode, () => void] {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as ThemeMode | null
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

export function useScrollMetrics(sectionRefs: Array<RefObject<HTMLElement | null>>) {
  const [metrics, setMetrics] = useState({
    scrollY: 0,
    viewportH: 1,
    viewportW: 1,
    activeSection: 0,
  })

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const scrollY = window.scrollY
      const viewportH = window.innerHeight
      const viewportW = window.innerWidth
      const center = scrollY + viewportH * 0.45

      let activeSection = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sectionRefs.forEach((ref, index) => {
        const el = ref.current
        if (!el) return
        const top = el.offsetTop
        const mid = top + el.offsetHeight * 0.5
        const distance = Math.abs(center - mid)
        if (distance < closestDistance) {
          closestDistance = distance
          activeSection = index
        }
      })

      setMetrics({ scrollY, viewportH, viewportW, activeSection })
    }

    const schedule = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [sectionRefs])

  return metrics
}
