/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [4.29KB] > C:\Users\Mae K\OneDrive - nevada.unr.edu\Documents\2023-2024\Winter 2024\IrvineHacks 2024\my-app\public\Steve\scene-transformed.glb [3.06KB] (29%)
Author: Vincent Yanez (https://sketchfab.com/vinceyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-steve-cb228dcc137042cc9a3dc588758cc6e9
Title: Minecraft - Steve
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Steve(props) {
  const { nodes, materials } = useGLTF('/Steve/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
        <ambientLight intensity={3} />
        <mesh geometry={nodes['Steve_02_-_Default_0'].geometry} material={materials['02_-_Default']} position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Steve/scene-transformed.glb')
