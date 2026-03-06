import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = ({ lowPerformance = false }) => {
  const points = useRef()
  // Adjust particle count based on device capability
  const particleCount = lowPerformance ? 80 : 150
  const frameCountRef = useRef(0)
  const isActiveRef = useRef(true)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color('#2EA3D6')
    const color2 = new THREE.Color('#00C2FF')

    for (let i = 0; i < particleCount; i++) {
      // Random position in a sphere
      const radius = 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Interpolate between two colors
      const mixedColor = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    return [positions, colors]
  }, [])

  // Pause animation when page is hidden to save resources
  useEffect(() => {
    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  // Ultra-heavy throttle - update every 6th/8th frame based on performance
  useFrame((state) => {
    if (!isActiveRef.current) return // Don't animate when page is hidden
    
    frameCountRef.current++
    const frameSkip = lowPerformance ? 8 : 6
    if (frameCountRef.current % frameSkip === 0 && points.current) {
      const time = state.clock.getElapsedTime()
      const speed = lowPerformance ? 0.02 : 0.03
      points.current.rotation.y = time * speed // Slower rotation on low-end
      points.current.rotation.x = Math.sin(time * 0.08) * 0.08
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default ParticleField
