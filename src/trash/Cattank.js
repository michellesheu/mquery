/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [16.66KB] > C:\Users\Mae K\OneDrive - nevada.unr.edu\Documents\2023-2024\Winter 2024\IrvineHacks 2024\my-app\public\Cattank\scene-transformed.glb [760.44KB] (-4464%)
Author: Marius Dobre (https://sketchfab.com/Marius.Dobre)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tank-cat-afec0186c75f447db3ca880427765b25
Title: Tank Cat
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Cattank(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Cattank/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">

        <group name="Root" rotation={[-Math.PI / 2, 0, 0]} scale={1.433}>
          <group name="Cylinder" position={[0.039, 0.16, -0.24]} scale={1.508}>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} />
            <mesh name="Cylinder_0" geometry={nodes.Cylinder_0.geometry} material={materials['grumpy-cat-6-690x690']} />
          </group>
        </group>
        <ambientLight intensity={3} />
        <mesh name="CatHead_0" geometry={nodes.CatHead_0.geometry} material={materials['grumpy-cat-6-690x690']} position={[0.055, -0.395, -0.229]} rotation={[0.126, 0.695, -0.112]} scale={[1.228, 1.228, 0.902]} />
        <mesh name="cover_0" geometry={nodes.cover_0.geometry} material={materials.occ1} position={[0.082, -0.572, -0.22]} rotation={[-Math.PI / 2, 0, 1.013]} scale={1.433} />
      </group>
    </group>
  )
}

useGLTF.preload('/Cattank/scene-transformed.glb')
