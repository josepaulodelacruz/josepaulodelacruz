import * as THREE from 'three'
import { Text } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useSpring, a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { eventStore } from '../../stores/eventStore'
import { useControls } from 'leva'

export default function WelcomeText () {
  const { appearText } = eventStore(state => state)
  const textRef1 = useRef()
  const textRef2 = useRef()
  const textRef3 = useRef()
  const opacityValues = useRef(0)
  const posYValues1 = useRef(2);
  const posYValues2 = useRef(0.60);
  const posYValues3 = useRef(0.2);


  useEffect(() => {
    textRef1.current.material.opacity = 0;
    textRef2.current.material.opacity = 0;
    textRef3.current.material.opacity = 0;

  }, [])

  useFrame(() => {
    let _opacity;
    let _posY
    let _posY2
    let _posY3
    if(appearText) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 1, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current
      textRef2.current.material.opacity = opacityValues.current
      textRef3.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 2.24, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      _posY2 = THREE.MathUtils.lerp(posYValues2.current, 0.97, 0.11);
      posYValues2.current = _posY2
      textRef2.current.position.y = posYValues2.current

      _posY3 = THREE.MathUtils.lerp(posYValues3.current, 0.4, 0.11);
      posYValues3.current = _posY3
      textRef3.current.position.y = posYValues3.current
      return null;
    }

    if(!appearText) {
        ///change opacity values to appear [textRef1, textRef2]
        _opacity = THREE.MathUtils.lerp(opacityValues.current, 0, 0.1);
        opacityValues.current = _opacity
        textRef1.current.material.opacity = opacityValues.current
        textRef2.current.material.opacity = opacityValues.current
        textRef3.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
        _posY = THREE.MathUtils.lerp(posYValues1.current, 2, 0.11);
        posYValues1.current = _posY
        textRef1.current.position.y = posYValues1.current
        _posY2 = THREE.MathUtils.lerp(posYValues2.current, 0.60, 0.11);
        posYValues2.current = _posY2
        textRef2.current.position.y = posYValues2.current

        _posY3 = THREE.MathUtils.lerp(posYValues3.current, 0.2, 0.11);
        posYValues3.current = _posY3
        textRef3.current.position.y = posYValues3.current

      return null;
    }
  })

  return (
    <>
      <Text
        ref={textRef1}
        position={[0.88, 2.24, 2.34]}
        rotation={[0.02, 1.55, 0]}
        fontSize={.15}
        maxWidth={2.5}
        transparent
        textAlign='center'
        color="white"
        font='./font.woff'>
        I'm Jose!
        Web/Mobile Developer
      </Text>
      <Text
        ref={textRef2}
        position={[2.95, 0.97, 0.55]}
        rotation={[0, 1.55, 0]}
        fontSize={.3}
        transparent
        maxWidth={3.5}
        textAlign='center'
        color="white"
        font='./font.woff'>
        Welcome to my portfolio!
      </Text>
      <Text
        ref={textRef3}
        position={[2.95,0.4,0.55]}
        rotation={[0, 1.55, 0]}
        fontSize={.15}
        transparent
        maxWidth={3.5}
        textAlign='center'
        color="white"
        font='./font.woff'>
        Scroll down to navigate
      </Text>
    </>
  )
}
