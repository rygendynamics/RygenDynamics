import { useState, useEffect, useRef } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  const containerRef = useRef(null)
  const viewerRef = useRef(null)

  useEffect(() => {
    // Check device performance
    const checkPerformance = () => {
      const memory = navigator.deviceMemory || 4
      const cpuCores = navigator.hardwareConcurrency || 2
      
      // If device has less than 3GB RAM or less than 2 CPU cores, use low performance mode
      if (memory < 3 || cpuCores < 2) {
        setIsLowPerformance(true)
        return
      }
    }

    checkPerformance()

    // Intersection Observer to load only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay for low performance devices to stagger loading
            const loadDelay = isLowPerformance ? 1000 : 0
            setTimeout(() => setShouldLoad(true), loadDelay)
            observer.disconnect() // Load once and disconnect
          }
        })
      },
      { rootMargin: isLowPerformance ? '50px' : '100px' } // Smaller preload for low-end devices
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      
      // Cleanup: Remove the spline viewer element
      if (viewerRef.current) {
        const viewer = viewerRef.current.querySelector('spline-viewer')
        if (viewer) {
          viewer.remove()
        }
      }
    }
  }, [isLowPerformance])

  return (
    <div 
      ref={containerRef}
      className="spline-container" 
      style={{ 
        clipPath: `inset(0 0 ${clipHeight}px 0)`,
        // Reduce quality on low-end devices
        ...(isLowPerformance && { opacity: 0.85, filter: 'brightness(0.95)' })
      }}
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
        <div ref={viewerRef} style={{ pointerEvents: isLowPerformance ? 'none' : 'auto' }}>
          <spline-viewer 
            url={sceneUrl}
            loading="lazy"
            {...(isLowPerformance && { 'events-target': 'none' })}
          ></spline-viewer>
        </div>
      )}
    </div>
  )
}

export default SplineViewer
