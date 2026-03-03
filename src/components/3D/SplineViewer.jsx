import { useEffect, useRef, useState } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const cleanupTimerRef = useRef(null)

  // AGGRESSIVE lazy load: strict visibility with immediate cleanup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setIsMounted(true)
            // Clear any pending cleanup
            if (cleanupTimerRef.current) {
              clearTimeout(cleanupTimerRef.current)
              cleanupTimerRef.current = null
            }
          } else {
            // Immediately hide when out of view
            setIsVisible(false)
            // Unmount after 500ms to free memory
            cleanupTimerRef.current = setTimeout(() => {
              setIsMounted(false)
            }, 500)
          }
        })
      },
      {
        rootMargin: '50px', // Tighter margin - only load when very close
        threshold: 0.1 // Require 10% visibility
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      if (cleanupTimerRef.current) {
        clearTimeout(cleanupTimerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="spline-container">
      {isMounted && isVisible ? (
        <spline-viewer 
          url={sceneUrl}
          hide-controls="true"
          loading="lazy"
          style={{ clipPath: `inset(0 0 ${clipHeight}px 0)` }}
        ></spline-viewer>
      ) : (
        <div className="spline-loading-placeholder">
          {isVisible && <div className="spline-loading-spinner"></div>}
        </div>
      )}
    </div>
  )
}

export default SplineViewer
