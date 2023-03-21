import Office from './Office'
import { getProject } from '@theatre/core'
import responsiveAnim from '../animations/responsiveAnim.json'
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { Scroll, ScrollControls, Html } from '@react-three/drei'
import { eventStore } from '../stores/eventStore'

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project', { state: responsiveAnim}).sheet('Demo Sheet')

// studio.initialize()
// studio.extend(extension)

export default function Scene () {
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