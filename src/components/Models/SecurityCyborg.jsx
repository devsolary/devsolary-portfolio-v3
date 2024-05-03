/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: fletcherkinnear (https://sketchfab.com/fletcherkinnear)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/security-cyborg-94ea8c717c374e3fa8aaa7549235b323
Title: Security Cyborg
*/

"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function SecurityCyborg(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/cyborg-scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Head}
          skeleton={nodes.Object_7.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.material}
          skeleton={nodes.Object_8.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.Body}
          skeleton={nodes.Object_10.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.Secondary}
          skeleton={nodes.Object_12.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials.Head}
          skeleton={nodes.Object_14.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.Glow}
          skeleton={nodes.Object_15.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials.Secondary}
          skeleton={nodes.Object_17.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.Head}
          skeleton={nodes.Object_19.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_20"
          geometry={nodes.Object_20.geometry}
          material={materials.Secondary}
          skeleton={nodes.Object_20.skeleton}
          scale={0.002}
        />
        <skinnedMesh
          name="Object_22"
          geometry={nodes.Object_22.geometry}
          material={materials.Secondary}
          skeleton={nodes.Object_22.skeleton}
          scale={0.002}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cyborg-scene-transformed.glb')