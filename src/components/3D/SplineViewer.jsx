import { useEffect, useRef, useState } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const viewerRef = useRef(null)
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Aggressive lazy load: mount/unmount based on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Load when close to viewport, unload when far away
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        rootMargin: '150px', // Tighter margin for faster unload
        threshold: 0
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let removalAttempts = 0
    let successfulRemovals = 0

    const hideSplineLogo = () => {
      if (viewerRef.current) {
        const shadowRoot = viewerRef.current.shadowRoot
        if (shadowRoot) {
          const selectors = ['#logo', '.logo', 'a[href*="spline"]']
          let removedCount = 0
          
          selectors.forEach(selector => {
            const elements = shadowRoot.querySelectorAll(selector)
            elements.forEach(el => {
              const text = el.textContent?.toLowerCase() || ''
              const href = el.getAttribute('href')?.toLowerCase() || ''
              
              if (text.includes('spline') || text.includes('built') || 
                  href.includes('spline') || el.id === 'logo') {
                el.remove()
                removedCount++
              }
            })
          })

          if (removedCount > 0) {
            successfulRemovals++
          }

          removalAttempts++

          // Stop checking after 20 attempts or 3 successful removals
          if (removalAttempts >= 20 || successfulRemovals >= 3) {
            clearInterval(interval)
          }
        }
      }
    }
    
    // Check every 500ms, but will auto-stop after watermark is removed
    const interval = setInterval(hideSplineLogo, 500)
    
    // Safety cleanup after 15 seconds max
    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, 15000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="spline-container">
      {isVisible ? (
        <spline-viewer 
          ref={viewerRef} 
          url={sceneUrl}
          hide-controls="true"
          style={{ clipPath: `inset(0 0 ${clipHeight}px 0)` }}
        ></spline-viewer>
      ) : (
        <div className="spline-loading-placeholder">
          <div className="spline-loading-spinner"></div>
        </div>
      )}
    </div>
  )
}

export default SplineViewer
