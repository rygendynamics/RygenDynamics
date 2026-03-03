import { useEffect, useRef } from 'react'
import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  const viewerRef = useRef(null)

  useEffect(() => {
    const hideSplineLogo = () => {
      if (viewerRef.current) {
        const shadowRoot = viewerRef.current.shadowRoot
        if (shadowRoot) {
          // Find and remove all logo elements
          const selectors = ['#logo', '.logo', 'a', '[id*="logo"]', '[class*="logo"]', 'div', 'span']
          selectors.forEach(selector => {
            const elements = shadowRoot.querySelectorAll(selector)
            elements.forEach(el => {
              // Check if element contains spline-related content
              const text = el.textContent?.toLowerCase() || ''
              const href = el.getAttribute('href')?.toLowerCase() || ''
              
              if (text.includes('spline') || text.includes('built') || 
                  href.includes('spline') || el.id === 'logo') {
                el.remove() // Completely remove the element
              }
            })
          })
        }
      }
    }
    
    // Continuously check and remove watermark
    const interval = setInterval(hideSplineLogo, 100)
    
    // Also use MutationObserver to catch dynamic additions
    let observer
    if (viewerRef.current?.shadowRoot) {
      observer = new MutationObserver(hideSplineLogo)
      observer.observe(viewerRef.current.shadowRoot, { 
        childList: true, 
        subtree: true 
      })
    }
    
    return () => {
      clearInterval(interval)
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <div className="spline-container">
      <spline-viewer 
        ref={viewerRef} 
        url={sceneUrl}
        hide-controls="true"
        style={{ clipPath: `inset(0 0 ${clipHeight}px 0)` }}
      ></spline-viewer>
    </div>
  )
}

export default SplineViewer
