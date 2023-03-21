import * as THREE from 'three'

export default function Emissions({model}) {
  return (
    <mesh
      geometry={model.geometry}>
      <meshBasicMaterial
        side={THREE.DoubleSide}
        color={'yellow'}
      />
    </mesh>
  )
}