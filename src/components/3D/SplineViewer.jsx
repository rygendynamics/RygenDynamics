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
        }
      }
    }
    
    const interval = setInterval(hideSplineLogo, 500)
    
    return () => clearInterval(interval)
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
