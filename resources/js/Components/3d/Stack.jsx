import { useTexture, Edges } from '@react-three/drei'

export default function Stack ({ model }) {
  const texture = useTexture('stack.jpg')
  texture.flipY = false

  return (
    <>
      <mesh
        geometry={model.geometry}
        rotation={model.rotation}
        position={model.position}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
    </>
  )
}