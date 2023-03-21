import { Float, Text, Edges } from '@react-three/drei'
import { useControls } from 'leva'
import { eventStore } from '../../../stores/eventStore'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function TextContact(){
  const { appearContactText } = eventStore(state => state)
  const textRef1 = useRef()
  const opacityValues = useRef(0)
  const posYValues1 = useRef(0.60);


  useEffect(() => {
    textRef1.current.material.opacity = 0;
  }, [])

  useFrame(() => {
    let _opacity;
    let _posY
    if(appearContactText) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 1, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 0.70, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }

    if(!appearContactText) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 0, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 0.50, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }
  })

  return (
    <Float
      rotationIntensity={.1}
      speed={.5}
    >
      <Text
        ref={textRef1}
        fontSize={0.06}
        position={[-1.55, 0.68, 0.44]}
        rotation={[0, 1.40, 0.02]}
        maxWidth={.5}
        transparent
        textAlign='center'
        color="#FFB52E"
        font='./font.woff'
      >
        Contact & Socials Media
      </Text>
    </Float>
  )
}
