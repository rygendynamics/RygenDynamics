import { useEffect, useRef, useState } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const viewerRef = useRef(null)
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [viewerKey, setViewerKey] = useState(0) // For forcing remount

  // Aggressive lazy load: mount/unmount based on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          
          // Force refresh viewer when coming back into view after being hidden
          if (entry.isIntersecting) {
            setViewerKey(prev => prev + 1)
          }
        })
      },
      {
        rootMargin: '100px', // Tighter margin
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

    const hideSplineLogo = () => {
      if (viewerRef.current) {
        const shadowRoot = viewerRef.current.shadowRoot
        if (shadowRoot) {
          const selectors = ['#logo', '.logo', 'a[href*="spline"]']
          
          selectors.forEach(selector => {
            const elements = shadowRoot.querySelectorAll(selector)
            elements.forEach(el => {
              const text = el.textContent?.toLowerCase() || ''
              const href = el.getAttribute('href')?.toLowerCase() || ''
              
              if (text.includes('spline') || text.includes('built') || 
                  href.includes('spline') || el.id === 'logo') {
                el.remove()
              }
            })
          })

          removalAttempts++

          // Stop after 10 attempts
          if (removalAttempts >= 10) {
            clearInterval(interval)
          }
        }
      }
    }
    
    const interval = setInterval(hideSplineLogo, 500)
    
    // Force cleanup after 8 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, 8000)

    // Auto-refresh viewer after 45 seconds to prevent memory buildup
    const refreshTimeout = setTimeout(() => {
      setViewerKey(prev => prev + 1)
    }, 45000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      clearTimeout(refreshTimeout)
    }
  }, [isVisible, viewerKey])

  return (
    <div ref={containerRef} className="spline-container">
      {isVisible ? (
        <spline-viewer 
          key={viewerKey}
          ref={viewerRef} 
          url={sceneUrl}
          hide-controls="true"
          loading="lazy"
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
