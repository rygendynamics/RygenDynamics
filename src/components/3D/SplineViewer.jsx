import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  return (
    <div className="spline-container" style={{ clipPath: `inset(0 0 ${clipHeight}px 0)` }}>
      <spline-viewer 
        url={sceneUrl}
        loading="lazy"
      ></spline-viewer>
    </div>
  )
}

export default SplineViewer
