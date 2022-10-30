import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader'
import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Model = ({ pageRef }) => {

    const modelRef = useRef(null)
    console.log(modelRef)

    gsap.registerPlugin(ScrollTrigger)
    const gltf = useLoader(GLTFLoader,  "./sprayer.glb")
    
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
    }, [modelRef.current])

  return (
    <primitive 
        object={gltf.scene} 
        ref={modelRef} 
        position={[0, -0.3, 0.25]}
    />
  )
}

export default Model