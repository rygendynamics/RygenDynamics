import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = () => {
  const points = useRef()
  const particleCount = 100 // Reduced for performance
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

  // Throttle animation - update every 8th frame
  useFrame((state) => {
    if (!isActiveRef.current) return // Don't animate when page is hidden
    
    frameCountRef.current++
    if (frameCountRef.current % 8 === 0 && points.current) {
      const time = state.clock.getElapsedTime()
      points.current.rotation.y = time * 0.025
      points.current.rotation.x = Math.sin(time * 0.06) * 0.06
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
