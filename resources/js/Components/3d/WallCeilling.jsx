import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { eventStore } from '../../stores/eventStore'
import { useFrame } from '@react-three/fiber'

export default function WallCeilling ({ wallModel, ceilModel, texture, ...props }) {
  const isHide = eventStore(state => state.ceilWallHide)
  const wall = useRef()
  const roof = useRef()
  const windowRef = useRef()
  const windowRef2 = useRef()
  const val = useRef(0)
  const opacityValues = useRef(1)

  ///CODED BY JOSE PAULO DELA CRUZ
  ///Interpolate the wall the ceil position [x,y] values to 0-1
  useFrame(async () => {
    let pos
    let newOpacity
    if ((isHide && val.current <= 0.5)) {
      ///animating the wall 0 to 1
      pos = THREE.MathUtils.lerp(val.current, 0.5, 0.1)
      val.current = pos

      ///animating the wall by changing the opacity from 1 to 0
      newOpacity = THREE.MathUtils.lerp(opacityValues.current, 0, 0.10000000000000000000000000000000000000000000000000)
      opacityValues.current = newOpacity

      ///change the wall position and opacity of the [wall, roof] models
      wall.current.position.x = val.current
      roof.current.position.y = val.current
      windowRef.current.position.x = val.current
      windowRef2.current.position.x = val.current

      wall.current.material.opacity = opacityValues.current
      windowRef.current.material.opacity = opacityValues.current
      windowRef2.current.material.opacity = opacityValues.current
      roof.current.material.opacity = opacityValues.current
    }

    if (!isHide && val.current.toFixed(2) > 0.00) {
      ////animating the wall 1 - 0
      pos = THREE.MathUtils.lerp(val.current, 0, 0.1000000000000000000000000000000000000)
      val.current = pos

      ///animating the opacity of the models from 0 to 1
      newOpacity = THREE.MathUtils.lerp(opacityValues.current, 1, 0.10000000000000000000000000000000000000000000000000)
      opacityValues.current = newOpacity

      ///change the wall position and opacity of the [wall, roof] object
      wall.current.position.x = val.current
      roof.current.position.y = val.current
      windowRef.current.position.x = val.current
      windowRef2.current.position.x = val.current

      wall.current.material.opacity = opacityValues.current
      roof.current.material.opacity = opacityValues.current
      windowRef.current.material.opacity = opacityValues.current
      windowRef2.current.material.opacity = opacityValues.current

    }
  })

  return (
    <group>
      <mesh
        ref={wall}
        geometry={wallModel.children[0].geometry}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent/>
      </mesh>
      <mesh
        ref={windowRef2}
        geometry={wallModel.children[1].geometry}
      >
        <meshStandardMaterial {...wallModel.children[1].material} side={THREE.DoubleSide} transparent/>
      </mesh>
      <mesh
        ref={windowRef}
        geometry={wallModel.children[2].geometry}
      >
        <meshStandardMaterial {...wallModel.children[2].material} color={'black'} side={THREE.DoubleSide} transparent/>
      </mesh>
      <mesh ref={roof} geometry={ceilModel.geometry}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent/>
      </mesh>
    </group>
  )
}
