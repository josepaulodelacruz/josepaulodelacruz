import { useTexture, Edges } from '@react-three/drei'
import * as THREE from 'three'

export function Contact ({ FB, upwork, ig, linkedin, github, linkedinLogo, upworkLogo }) {
  const texture = useTexture('stack.jpg')
  texture.flipY = false

  const openLink = (link) => {
    switch (link) {
      case "FB":
        window.open('https://www.facebook.com/jjeypi', "_blank")
        break;
      case "UPWORK":
        window.open('https://www.upwork.com/freelancers/~017721da108678f50d', "_blank")
        break;
      case "IG" :
        window.open('https://www.instagram.com/jjeyps', "_blank")
        break;
      case "LINKEDIN":
        window.open('https://www.linkedin.com/in/jose-paulo-dela-cruz-a03192202', "_blank")
        break;
      case "GITHUB":
        window.open('https://github.com/josepaulodelacruz', "_blank")
        break;
      default:
        break
    }

  }

  return (
    <group>
      {/*<Float floatIntensity={0.1} speed={5} floatingRange={[0, 0.1]} rotationIntensity={0.1}>*/}
      <mesh
        onClick={() => openLink('FB')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
        rotation={FB.rotation}
        position={FB.position}
        geometry={FB.geometry}>
        <meshBasicMaterial map={texture}/>
        <Edges />

      </mesh>
      {/*</Float>*/}

      <group
        onClick={() => openLink('UPWORK')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
             onPointerOut={() => document.body.style.cursor = 'auto'}>
        <mesh
          rotation={upwork.rotation}
          position={upwork.position}
          geometry={upwork.geometry}>
          <meshBasicMaterial map={texture} side={THREE.DoubleSide}/>
          <Edges />
        </mesh>
        <mesh
          geometry={upworkLogo.geometry}
          position={upworkLogo.position}
          rotation={upworkLogo.rotation}
        >

          <meshStandardMaterial {...upworkLogo.material} transparent opacity={.6}/>
          <Edges />
        </mesh>
      </group>

      <group
        onClick={() => openLink('LINKEDIN')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
             onPointerOut={() => document.body.style.cursor = 'auto'}>
        <mesh
          rotation={linkedin.rotation}
          position={linkedin.position}
          geometry={linkedin.geometry}>
          <meshBasicMaterial emission={0} map={texture} side={THREE.DoubleSide}/>
          <Edges />
        </mesh>
        <mesh
          rotation={linkedinLogo.rotation}
          position={linkedinLogo.position}
          geometry={linkedinLogo.geometry}>
          <meshStandardMaterial {...linkedinLogo.material} transparent opacity={.6}/>
          <Edges />
        </mesh>
      </group>

      <mesh
        onClick={() => openLink('GITHUB')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
        rotation={github.rotation}
        position={github.position}
        geometry={github.geometry}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide}/>
        <Edges />
      </mesh>

      <mesh
        onClick={() => openLink('IG')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
        rotation={ig.rotation}
        position={ig.position}
        geometry={ig.geometry}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide}/>
        <Edges />
      </mesh>




    </group>
  )
}

