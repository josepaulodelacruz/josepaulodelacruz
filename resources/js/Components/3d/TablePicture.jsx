import { useTexture, TransformControls, PivotControls } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useRef } from 'react'

export default function TablePicture ({ model }) {
  return (
    <mesh
      geometry={model.geometry}
      material={model.material}
    />
  )
}
