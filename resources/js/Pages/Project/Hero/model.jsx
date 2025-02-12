/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/park.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Ground.geometry}
				material={materials.Ground}
			/>
			<mesh
				// castShadow
				receiveShadow
				geometry={nodes.Grass001.geometry}
				material={materials.Grass}
			/>
			<mesh
				// castShadow
				receiveShadow
				geometry={nodes.Grass002.geometry}
				material={materials.Grass}
				position={[3, 0, -3]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bridge.geometry}
				material={materials["Rock 2"]}
				position={[0.163, 0, 0.313]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001.geometry}
				material={materials.Rock}
				position={[0.163, 0, 0.313]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane002.geometry}
				material={materials.Wood}
				position={[0.163, 0, 0.313]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane003.geometry}
				material={materials["Wood 2"]}
				position={[0.163, 0, 0.313]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Tree.geometry}
				material={materials.Wood}
				position={[-2.615, 0.2, 2.837]}
				scale={1.427}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002.geometry}
					material={materials.Tree}
					position={[2.292, -0.2, -2.591]}
				/>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Tree001.geometry}
				material={materials.Wood}
				position={[-2.983, 0.2, -2.191]}
				rotation={[-Math.PI, 1.106, -Math.PI]}
				scale={1.117}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Bench.geometry}
				material={materials.Wood}
				position={[2.499, 0.2, 2.659]}
				scale={0.989}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Vert001.geometry}
					material={materials.Metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Vert002.geometry}
					material={materials.Metal}
				/>
			</mesh>
			<group position={[-2.048, 0.2, -3.294]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle.geometry}
					material={materials.Metal}
				/>
				<mesh
					// castShadow
					receiveShadow
					geometry={nodes.Circle_1.geometry}
					material={materials.Material}
				/>
			</group>
			<mesh
				// castShadow
				receiveShadow
				geometry={nodes.Path.geometry}
				material={materials.Rock}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Grass005.geometry}
				material={materials.Tree}
				position={[1.294, 0.2, 2.665]}
				rotation={[0, -1.124, 0]}
				scale={1.263}
			/>
			<group
				position={[1.273, -0.5, 1.03]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={1.34}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube.geometry}
					material={materials.Rock}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_1.geometry}
					material={materials.Tree}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Tile017.geometry}
				material={materials.Rock}
				position={[-1.002, 0, -3.579]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials.Water}
			/>
			<group
				position={[30.609, 31.243, 30.609]}
				rotation={[1.107, 0.421, -0.685]}
			>
				<OrthographicCamera
					makeDefault={true}
					zoom={100}
					far={1000}
					near={1}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
			</group>
			<mesh
				// castShadow
				receiveShadow
				geometry={nodes.Plane004.geometry}
				material={materials.Bg}
				position={[0, -0.791, 0]}
				scale={14.486}
			/>
		</group>
	);
}

useGLTF.preload("/park.glb");
