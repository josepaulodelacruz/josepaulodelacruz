import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useScroll, useTexture, Edges } from '@react-three/drei'
import { PerspectiveCamera as PCamera } from '@theatre/r3f'
import { eventStore } from '../../stores/eventStore'
import * as THREE from 'three'
import Stack from './Stack'
import WallCeilling from './WallCeilling'
import WallFrame from './WallFrame'
import Emissions from './Emissions'
import GradPic from './GradPic'
import Jollibee from './Jollibee'
import Keyboard from './Keyboard'
import { Contact } from './contacts/Contact'
import Sticky from './Sticky'
import TablePicture from './TablePicture'
import WelcomeText from './WelcomeText'
import AboutSelf from './AboutSelf'
import Screen from './Screen'
import TextContact from './contacts/TextContact'
import Gcash from './Gcash'
import Resume from './Resume'
import { isMobile, isBrowser } from 'react-device-detect'

export default function Office({sequence}){
  const {animateCeilWall, animateText, animateAboutText, animateContactText, activateKeyboard, activeKeyboard} = eventStore(state => state)
  const { nodes } = useGLTF('/office.glb')
  const bakeTexture = useTexture('bake.jpg')
  const instances = useMemo(() => ({
    baked: nodes.bake,
    logos: nodes.logos,
    ceil: nodes.roof,
    wall: nodes.rightwall,
    lamp: nodes.lamp,
    gradpic: nodes.gradpic,
    jollibee: nodes.jollibee,
    keyboard: nodes.keyboard,
    fb: nodes.fb,
    upworkBase: nodes.upw,
    ig: nodes.ig,
    linkedin_base: nodes.linkedin_base,
    linkedinLogo: nodes.linkedin,
    upworkLogo: nodes.upwork,
    github: nodes.github,
    sticky: nodes.sticky,
    profile: nodes.profile,
    gcash: nodes.gcash,
  }), [nodes])
  const scroll = useScroll()
  const [animate, setAnimate] = useState(false)
  const _show = useRef(false)
  const _showWelcomeText = useRef(false)
  const _showAboutText = useRef()
  const _contactsShow = useRef(false)
  const _activeKeyboard = useRef(false)

  bakeTexture.flipY = false

  ///play animation on mount
  useEffect(() => {
    sequence.play({range: [0, 1.5]}).then((promise) => {
      if(promise) {
        setAnimate(true)
        animateText()
      }
    })
  }, [])

  //listen for scroll offset
  useFrame(() => {
    const offset = scroll.offset * 13
    // console.log(scroll.visible(.73, .1))
    if(animate && scroll.offset <= 13) {

      ///hide animation for [<WelcomeText />]
      if(offset >= 1.2 && !_showWelcomeText.current) {
        animateText()
        _showWelcomeText.current = true;
      }
      ///show [<WelcomeText/>] animatoin
      if(offset <= 1.2 && _showWelcomeText.current) {
        animateText()
        _showWelcomeText.current = false;
      }

      ///reshow the [roof, wall] if offset is more than 0
      if(offset >= 6 && !_show.current) {
        _show.current = true
        animateCeilWall()
      }

      ///rehide the [roof, wall, <AboutSelf />] if offset reach top
      if(offset < 6 && _show.current) {
        _show.current = false;
        animateCeilWall()
        _showAboutText.current = false
        animateAboutText()
      }

      ///show animation [<AboutSelf/>]
      ///show <AboutSelf /> if offset reach .50
      if(scroll.visible(.50,.1) && !_showAboutText.current) {
        _showAboutText.current = true
        _activeKeyboard.current = false
        activateKeyboard(false)
        animateAboutText();
      }
      ///hide <AboutSelf/> if offset reach .60
      if(scroll.visible(.60,.1) && _showAboutText.current) {
        _showAboutText.current = false

        animateAboutText();
      }

      ///show animation [<TextContact/>]
      ///show <TextContact/> if offset reach .50
      if(scroll.visible(.95,.1) && !_contactsShow.current) {
        _contactsShow.current = true;
        animateContactText();
      }

      ///show animation [<TextContact/>]
      ///show <TextContact/> if offset reach .50
      if(scroll.visible(.88,.1) && _contactsShow.current) {
        _contactsShow.current = false;
        animateContactText();
      }

      ///able to use keyboard when screen is at monitor
      if(scroll.visible(.73, .1) && !_activeKeyboard.current) {
        _activeKeyboard.current = true
        activateKeyboard(true)
      }

      ///disable to use keyboard when screen is at monitor
      if(scroll.visible(.85, .1) && _activeKeyboard.current) {
        _activeKeyboard.current = false
        activateKeyboard(false)
      }

      ///scroll animated on range 2
      sequence.position = 2;
      ///play the sequence animation depending on the scroll offset
      sequence.position = sequence.position + offset;
      return;
    }

  })

  return (
    <group position={[0,-0.5,0]}>
      <PCamera
        theatreKey="Camera"
        makeDefault={isBrowser ?? true}
        flat
        fov={45}
        near={0.1}
        far={200}
        rotation={[-0.40, 0.60, 0.22]}
        position={[4.06, 2.47, 5]}
      />
      <PCamera
        theatreKey="phone"
        makeDefault={!isBrowser ?? false}
        flat
        fov={45}
        near={0.1}
        far={200}
        rotation={[-0.40, 0.60, 0.22]}
        position={[4.06, 2.47, 5]}
      />

      <mesh
        geometry={instances.baked.geometry}
      >
        <meshBasicMaterial
          map={bakeTexture}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Stack model={instances.logos} />

      <WallFrame model={nodes.sunset}/>

      <WallCeilling
        texture={bakeTexture}
        ceilModel={instances.ceil}
        wallModel={instances.wall}/>

      <Emissions
        model={instances.lamp}/>

      <GradPic
        model={instances.gradpic}/>

      <Gcash
        model={instances.gcash}/>

      <Jollibee
        model={instances.jollibee}/>

      <Keyboard
          model={instances.keyboard}/>

      <Contact
        ig={instances.ig}
        FB={instances.fb}
        linkedin={instances.linkedin_base}
        linkedinLogo={instances.linkedinLogo}
        upworkLogo={instances.upworkLogo}
        github={instances.github}
        upwork={instances.upworkBase}/>

      <Sticky
        model={instances.sticky}/>

      <TablePicture model={instances.profile}/>

      <WelcomeText/>

      <AboutSelf />

      <TextContact/>

      <Screen />

      <Resume />

    </group>
  );
}
