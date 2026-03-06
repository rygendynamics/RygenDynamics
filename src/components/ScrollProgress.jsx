import { useEffect, useState, useRef } from 'react'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Use requestAnimationFrame for better performance
      rafRef.current = requestAnimationFrame(() => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (window.pageYOffset / windowHeight) * 100
        setScrollProgress(scrolled)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
}

export default ScrollProgress
