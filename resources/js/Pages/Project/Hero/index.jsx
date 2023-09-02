import { Head } from '@inertiajs/react'
import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	OrthographicCamera,
	PivotControls,
	useHelper,
	SpotLight, useDepthBuffer, Environment,
} from '@react-three/drei'
import Model from './model'
import { useControls } from 'leva'
import React, { useRef } from 'react'

function Hero () {
	const { position, rotation } = useControls({
		position: {
			value: {x: 0, y: 0, z: 0}
		}
	})



	return (
		<>
			<Head>
				<title>
					Jose Paulo Portfolio
				</title>
				<meta name="Portfolio" content="Jose Paulo"/>
				<meta name="THREEJS" content="build with three js"/>
			</Head>
			<Canvas shadows={'soft'} style={{ height: '100vh' }}>
				<color attach="background" args={["#9A5DE6"]} />

				<DirectLight  position={position}/>
				<DirectLight2 />
				<OrthographicCamera
					rotation={[-0.82, 0.69, 0.59]}
					makeDefault zoom={100} position={[6.4, 6.3, 5]} />
				<ambientLight intensity={.75}/>
				<Model/>
			</Canvas>
		</>
	)
}

function DirectLight(props) {
	const ref = useRef()
	const depthBuffer = useDepthBuffer();
	const { position } = props

	return (
		<group position={[-20, 15, -20]}>
				<SpotLight
					color={'#fff'}
					castShadow={true}
					debug={true}
					position={[0,5, 0]}
					depthBuffer={depthBuffer}
					distance={1000}
					angle={200}
					attenuation={0}
					intensity={0.5}
				>
				</SpotLight>
		</group>
	)
}

function DirectLight2(props) {
	return (
		<group >
			{/*<PivotControls>*/}
				<SpotLight
					color={'#FFCD74'}
					position={[0, 10, 0]}
				castShadow={true}
				distance={1000}
				angle={1000}
				attenuation={0}
				intensity={1}
				/>
			{/*</PivotControls>*/}
		</group>
	)
}

export default Hero