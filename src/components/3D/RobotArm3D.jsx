import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const RobotArm3D = () => {
  const group = useRef()
  const joint1 = useRef()
  const joint2 = useRef()
  const joint3 = useRef()

  // Memoize materials to prevent memory leaks
  const metalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0E2A47',
    metalness: 0.8,
    roughness: 0.2
  }), [])

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#2EA3D6',
    metalness: 0.9,
    roughness: 0.1,
    emissive: '#2EA3D6',
    emissiveIntensity: 0.3
  }), [])

  // Heavy throttle - every 4th frame for critical performance
  let frameCount = 0
  useFrame((state) => {
    frameCount++
    if (frameCount % 4 !== 0) return // Run every 4th frame
    
    const t = state.clock.getElapsedTime()
    
    // Animate robot arm joints
    if (joint1.current) {
      joint1.current.rotation.z = Math.sin(t * 0.5) * 0.3
    }
    if (joint2.current) {
      joint2.current.rotation.z = Math.sin(t * 0.7) * 0.4
    }
    if (joint3.current) {
      joint3.current.rotation.z = Math.sin(t * 0.9) * 0.5
    }

    // Rotate the entire group slowly
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.2) * 0.2
    }
  })

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Base */}
      <Cylinder args={[0.5, 0.6, 0.3, 32]} position={[0, 0, 0]} material={metalMaterial}>
        <meshStandardMaterial color="#0E2A47" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Base accent ring */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0.2, 0]} material={accentMaterial}>
        <meshStandardMaterial color="#2EA3D6" metalness={0.9} roughness={0.1} emissive="#2EA3D6" emissiveIntensity={0.3} />
      </Sphere>

      {/* Joint 1 */}
      <group ref={joint1} position={[0, 0.3, 0]}>
        <Cylinder args={[0.15, 0.15, 1, 16]} position={[0, 0.5, 0]} material={metalMaterial}>
          <meshStandardMaterial color="#0E2A47" metalness={0.8} roughness={0.2} />
        </Cylinder>
        
        {/* Joint 1 connector */}
        <Sphere args={[0.2, 16, 16]} position={[0, 1, 0]} material={accentMaterial}>
          <meshStandardMaterial color="#00C2FF" metalness={0.9} roughness={0.1} emissive="#00C2FF" emissiveIntensity={0.4} />
        </Sphere>

        {/* Joint 2 */}
        <group ref={joint2} position={[0, 1, 0]}>
          <Cylinder args={[0.12, 0.12, 0.8, 16]} position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
            <meshStandardMaterial color="#0E2A47" metalness={0.8} roughness={0.2} />
          </Cylinder>
          
          {/* Joint 2 connector */}
          <Sphere args={[0.18, 16, 16]} position={[0.8, 0, 0]} material={accentMaterial}>
            <meshStandardMaterial color="#2EA3D6" metalness={0.9} roughness={0.1} emissive="#2EA3D6" emissiveIntensity={0.3} />
          </Sphere>

          {/* Joint 3 (End Effector) */}
          <group ref={joint3} position={[0.8, 0, 0]}>
            <Cylinder args={[0.1, 0.1, 0.6, 16]} position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
              <meshStandardMaterial color="#0E2A47" metalness={0.8} roughness={0.2} />
            </Cylinder>
            
            {/* End effector */}
            <Sphere args={[0.15, 16, 16]} position={[0.6, 0, 0]} material={accentMaterial}>
              <meshStandardMaterial color="#00C2FF" metalness={1} roughness={0} emissive="#00C2FF" emissiveIntensity={0.5} />
            </Sphere>

            {/* Gripper fingers */}
            <Box args={[0.05, 0.2, 0.05]} position={[0.7, 0.1, 0]} material={metalMaterial}>
              <meshStandardMaterial color="#2EA3D6" metalness={0.8} roughness={0.2} />
            </Box>
            <Box args={[0.05, 0.2, 0.05]} position={[0.7, -0.1, 0]} material={metalMaterial}>
              <meshStandardMaterial color="#2EA3D6" metalness={0.8} roughness={0.2} />
            </Box>
          </group>
        </group>
      </group>
    </group>
  )
}

export default RobotArm3D
