// import { editable as e } from '@theatre/r3f'
import { Html } from '@react-three/drei'
import TerminalPage from '../pages/terminal'
import { useThree } from '@react-three/fiber'
import '../pages/terminal/index.css'

export default function Screen({scroll}){
  const { gl } = useThree()
  return (
    <mesh
      // position={[0.464, 0.81, 1.049]}
      // rotation={[0,-0.475, -0.004]}
      // scale={1}
      theatreKey="Screen">
      <Html
        position={[0.464, 0.81, 1.049]}
        rotation={[0,-0.475, -0.004]}
        scale={[0.45,0.22,1]}
        occlude={'blending'}
        portal={{ current: gl.domElement.parentElement }}
        distanceFactor={0.400}
        transform>
        <TerminalPage />
      </Html>

    </mesh>
  )
}