
export default function Jollibee ({model}) {
  return (
    <mesh
      geometry={model.geometry}>

      <meshBasicMaterial {...model.material} emission={0} transparent opacity={.56}/>
    </mesh>
  )
}