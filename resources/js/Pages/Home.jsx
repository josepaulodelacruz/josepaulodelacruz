import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import responsiveAnim from '../animations/responsiveAnim.json'
import Office from '../Components/3d/Office.jsx'
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { Scroll, ScrollControls, Html } from '@react-three/drei'
import { eventStore } from '../stores/eventStore'
import { Head } from '@inertiajs/react'

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project', { state: responsiveAnim}).sheet('Demo Sheet')

// studio.initialize()
// studio.extend(extension)

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Jose Paulo Portoflio
        </title>
        <meta name="Portfolio" content="Jose Paulo" />
        <meta name="THREEJS" content="build with three js" />
      </Head>
      <Canvas style={{height: '100vh'}}>
        <Scene />
      </Canvas>
    </>

  )
}

function Scene() {
  const { isScrollEnable } = eventStore(state => state)

  return (
    <>
      <SheetProvider sheet={demoSheet}>
        <color args={['#201918']} attach="background"/>
        <ambientLight/>

        <ScrollControls pages={14} damping={0.1} enabled={isScrollEnable}>
          <Scroll>
            <Office sequence={demoSheet.sequence}/>
          </Scroll>
        </ScrollControls>

      </SheetProvider>
    </>
  )
}
