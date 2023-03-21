import { useMemo } from 'react'

export default function WallFrame({model}) {
  const instances = useMemo(() => ({
    Object: model.children[0],
    Object2: model.children[1],
    Object3: model.children[2],

  }), [model])

  return (
    <group position={model.position} rotation={model.rotation}>
      <mesh
        geometry={instances.Object.geometry}
        material={instances.Object.material}
      />
      <mesh
        geometry={instances.Object2.geometry}
        material={instances.Object2.material}
      />
      <mesh
        geometry={instances.Object3.geometry}
        material={instances.Object3.material}
      />
    </group>
  )
}