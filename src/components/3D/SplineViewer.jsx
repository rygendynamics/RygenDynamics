import { useEffect, useRef, useState } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const viewerRef = useRef(null)
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Lazy load: only initialize when component is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px' // Start loading 200px before visible
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    const hideSplineLogo = () => {
      if (viewerRef.current) {
        const shadowRoot = viewerRef.current.shadowRoot
        if (shadowRoot) {
          // Find and remove all logo elements
          const selectors = ['#logo', '.logo', 'a', '[id*="logo"]', '[class*="logo"]']
          selectors.forEach(selector => {
            const elements = shadowRoot.querySelectorAll(selector)
            elements.forEach(el => {
              // Check if element contains spline-related content
              const text = el.textContent?.toLowerCase() || ''
              const href = el.getAttribute('href')?.toLowerCase() || ''
              
              if (text.includes('spline') || text.includes('built') || 
                  href.includes('spline') || el.id === 'logo') {
                el.remove()
              }
            })
          })
        }
      }
    }
    
    // Reduced frequency for better performance
    const interval = setInterval(hideSplineLogo, 500)
    
    return () => clearInterval(interval)
  }, [shouldLoad])

  return (
    <div ref={containerRef} className="spline-container">
      {shouldLoad ? (
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
