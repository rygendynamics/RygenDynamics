import { useState, useEffect, useRef } from 'react'
import './SplineViewer.css'

// Global counter to limit concurrent Spline scenes
let activeSplineCount = 0
const MAX_CONCURRENT_SPLINES = 1

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef(null)
  const viewerRef = useRef(null)
  const loadTimeoutRef = useRef(null)

  useEffect(() => {
    // Intersection Observer to load only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeSplineCount < MAX_CONCURRENT_SPLINES) {
            // Wait for slot to be available
            const checkAndLoad = () => {
              if (activeSplineCount < MAX_CONCURRENT_SPLINES) {
                activeSplineCount++
                setShouldLoad(true)
                observer.disconnect()
              } else {
                // Retry after a delay if limit reached
                loadTimeoutRef.current = setTimeout(checkAndLoad, 500)
              }
            }
            checkAndLoad()
          }
        })
      },
      { rootMargin: '200px', threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
      }
      
      // Cleanup: Remove the spline viewer and free WebGL context
      if (shouldLoad) {
        activeSplineCount = Math.max(0, activeSplineCount - 1)
      }
      
      if (viewerRef.current) {
        const viewer = viewerRef.current.querySelector('spline-viewer')
        if (viewer) {
          // Force cleanup of WebGL contexts
          const canvas = viewer.shadowRoot?.querySelector('canvas')
          if (canvas) {
            const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
            if (gl) {
              const loseCtx = gl.getExtension('WEBGL_lose_context')
              if (loseCtx) loseCtx.loseContext()
            }
          }
          viewer.remove()
        }
      }
    }
  }, [shouldLoad])

  return (
    <div 
      ref={containerRef}
      className="spline-container" 
      style={{ clipPath: `inset(0 0 ${clipHeight}px 0)` }}
    >
      {!shouldLoad ? (
        <div 
          className="spline-loading-placeholder"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #0A1628 0%, #1B2F4B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}
        >
          <div className="loading-spinner" style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #2EA3D6',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      ) : (
        <div ref={viewerRef}>
          <spline-viewer 
            url={sceneUrl}
            loading="lazy"
          ></spline-viewer>
        </div>
      )}
    </div>
  )
}

export default SplineViewer
