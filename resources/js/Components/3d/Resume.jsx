
import { useTexture } from '@react-three/drei'
import { useControls } from 'leva'

export default function Resume() {
  const texture = useTexture('resume.jpg')

  return (
    <mesh
      position={[-0.03999999999999954,0.607 ,1.14]}
      rotation={[-1.59, 0, 0.45]}
      scale={[0.17999999999999955,0.28999999999999937,1]}
    >
      <planeGeometry />
      <meshStandardMaterial map={texture} emission={100}/>
    </mesh>
  )
}