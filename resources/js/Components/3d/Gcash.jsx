import { Text, Float, Edges } from '@react-three/drei'
import * as THREE from 'three'
import { useState, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { eventStore } from '../../stores/eventStore'

export default function Gcash ({ model }) {

  const { scrollEnabled,isScrollEnable, activeKeyboard } = eventStore(state => state)
  const meshRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef1 = useRef()
  const [isTextShow, setIsTextShow] = useState(false)
  const opacityValues = useRef(0)
  const posYValues1 = useRef(0.60);


  useEffect(() => {
    textRef1.current.material.opacity = 0;
  }, [])

  useFrame((state, delta) => {
    if (isAnimating) {
      meshRef.current.position.lerp(new THREE.Vector3(0.32, 0.68, 1.48), delta * 5);
      meshRef.current.rotation.y = -0.35
      meshRef.current.scale.lerp(new THREE.Vector3(0.09,0.08,0.12), delta * 5);
    } else {
      meshRef.current.position.lerp(new THREE.Vector3(0.1961083561182022, 0.6026488542556763, 0.9638755321502686), delta * 7);
      meshRef.current.rotation.y = 0
      meshRef.current.scale.lerp(new THREE.Vector3(0.03500552847981453,0.03500552847981453,0.03500552847981453), delta * 7);
    }
    let _opacity;
    let _posY
    if(isTextShow) {
      ///change opacity values to appear [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 1, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear slightly above
      _posY = THREE.MathUtils.lerp(posYValues1.current, 6, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }

    if(!isTextShow) {
      ///change opacity values to hide [textRef1, textRef2]
      _opacity = THREE.MathUtils.lerp(opacityValues.current, 0, 0.1);
      opacityValues.current = _opacity
      textRef1.current.material.opacity = opacityValues.current

      ///change position of [textRef1, textRef2] to appear lower the position [y]
      _posY = THREE.MathUtils.lerp(posYValues1.current, 5, 0.11);
      posYValues1.current = _posY
      textRef1.current.position.y = posYValues1.current
      return null;
    }


  });


  const handleClick = () => {
    if(!activeKeyboard) return
    setIsAnimating(true);
    scrollEnabled(false)
  };

  const handleMissedClick = () => {
    setIsAnimating(false)
    scrollEnabled(true)

  }

  return (
    <group
      ref={meshRef}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
        if(isAnimating) return
        setIsTextShow(true)
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
        setIsTextShow(false)
      }}
      onClick={handleClick}
      rotation={model.rotation}
      position={model.position}
      scale={model.scale}
      onPointerMissed={handleMissedClick}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={model.children[0].geometry}
        position={model.children[0].position}
        rotation={model.children[0].rotation}
        material={model.children[0].material}
        scale={model.children[0].scale}
      >
        <Edges />
      </mesh>


      <mesh
        castShadow
        receiveShadow
        geometry={model.children[1].geometry}
        position={model.children[1].position}
        rotation={model.children[1].rotation}
        material={model.children[1].material}
        scale={model.children[0].scale}
        transparent
      >
        <Edges />
      </mesh>
      <Float rotationIntensity={.05} speed={5}>
        <Text
          ref={textRef1}
          position={[0.3,1,0]}
          fontSize={1}
          maxWidth={3}
          transparent
          textAlign='center'
          color="#FFB52E"
          font='./font.woff'

        >
          BUY ME A COFFEE
        </Text>
      </Float>

    </group>
  )
}
