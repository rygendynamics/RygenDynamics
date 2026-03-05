import './SplineViewer.css'

const SplineViewer = ({ sceneUrl = "https://prod.spline.design/aDfKBg0AXx6XyNku/scene.splinecode", clipHeight = 60 }) => {
  return (
    <div className="spline-container">
      <spline-viewer 
        url={sceneUrl}
        loading="lazy"
      ></spline-viewer>
    </div>
  )
}

export default SplineViewer
