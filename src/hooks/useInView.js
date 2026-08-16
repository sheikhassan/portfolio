import { useEffect, useRef, useState } from 'react'

export function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    const fallback = window.setTimeout(() => setVisible(true), 1400)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return { ref, visible }
}
