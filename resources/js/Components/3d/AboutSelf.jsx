import { Text } from '@react-three/drei'
import { eventStore } from '../../stores/eventStore'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AboutSelf() {
  const { appearAboutText } = eventStore(state => state)
  const textRef1 = useRef()
  const opacityValues = useRef(0)
  const posYValues1 = useRef(0.60);


  useEffect(() => {
    textRef1.current.material.opacity = 0;
  }, [])

  useFrame(() => {
    let _opacity;
    let _posY
    if(appearAboutText) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 1, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 0.91, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }

    if(!appearAboutText) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 0, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 0.60, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }
  })

  return (
    <Text
      ref={textRef1}
      position={[-0.72, 0.91, 0.22]}
      rotation={[0.06, 0.26, 0.0]}
      fontSize={.07}
      maxWidth={1.5}
      transparent
      textAlign='center'
      color="#FFB52E"
      font='./font.woff'>
      I'm a Fullstack developer with passion building Web and Mobile applications.
    </Text>
  )
}
