export default function Sticky({model}) {
  return (
    <mesh

      geometry={model.geometry}
      position={model.position}
      rotation={model.rotation}
      scale={model.scale}
      material={model.material}
    >
    </mesh>
  )
}