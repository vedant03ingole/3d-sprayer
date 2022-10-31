/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


export function Sprayer({ pageRef }) {
  
  const modelRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  const { nodes, materials } = useGLTF('/sprayer.glb')

  useEffect(() => {
    if(!!modelRef.current) {

      let section = 0
      const tl = gsap.timeline({
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
              trigger: pageRef.current ,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.7,
              marker: true
          }
      })

      //Section 1
      tl.to(modelRef.current.position, {y: -0.2, z: 0.1}, section)
      
      // Section 2
      section +=1
      tl.to(modelRef.current.position, {y: -0.1, z: 0.1}, section)
      
      // Section 3
      section +=1
      tl.to(modelRef.current.position, {x: 0.2}, section)
      tl.to(modelRef.current.rotation, {x: 0, y: 2, z: 0, duration: 1}, section)
      
      // Section 4
      section +=1
      tl.to(modelRef.current.position, {x: -0.2}, section)
      tl.to(modelRef.current.rotation, {x: 0, y: 4, z: 0}, section)
      
      // Section 5
      section +=1
      tl.to(modelRef.current.rotation, {x: 0, y: 6, z: 0}, section)
      
      // Section 6
      section +=1
      tl.to(modelRef.current.position, {y: 0.3}, section)
      
      // Section 7
      section +=1
      tl.to(modelRef.current.position, {y: 0.3}, section)

  }
  }, [pageRef])
  

  return (
    <group 
      dispose={null}
      ref={modelRef}
      position={[0, -0.3, 0.25]}
      // onPointerOver={(e)=> e.object.material.color.set("red")} 
      // onPointerOut={(e)=> e.object.material.color.set("cyan")} 
    >
      <mesh geometry={nodes.Cube.geometry} material={materials.Plastic} position={[0, 0.01, 0]} scale={[0.88, 1.11, 0.43]} material-color="yellow"/>
      <mesh geometry={nodes.Cube_7.geometry} material={materials.Plastic} position={[0.06, 0.22, 0]} scale={[0.3, 0.11, 0.45]} />
      <mesh geometry={nodes.Cube_6.geometry} material={materials.Plastic} position={[-0.06, 0.22, 0]} scale={[0.28, 0.11, 0.45]} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Plastic} scale={[0.93, 0.2, 0.47]} />
      <mesh geometry={nodes.Cube_4.geometry} material={materials.Plastic} position={[0, 0.04, 0.04]} scale={[0.48, 0.83, 0.05]} />
      <mesh geometry={nodes.Cube_5.geometry} material={materials.Plastic} position={[0, 0.22, 0]} scale={[0.9, 0.03, 0.49]} />
      <mesh geometry={nodes.Cone.geometry} material={materials.Plastic} position={[0.06, 0.24, 0]} scale={[1, 0.04, 1]} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials.Plastic} position={[0, 0.19, 0.04]} scale={[0.87, 0.19, 0.05]} />
      <mesh geometry={nodes.Cone_3.geometry} material={materials.Plastic} position={[-0.06, 0.24, 0]} scale={[0.64, 0.03, 0.64]} />
      <mesh geometry={nodes.Cube_8.geometry} material={materials.Plastic} position={[0, 0.22, 0]} scale={[0.76, 0.06, 0.45]} />
    </group>
  )
}

useGLTF.preload('/sprayer.glb')