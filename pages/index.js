import { useRef } from 'react'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { Sprayer } from '../components/Sprayer'
import Hero from '../components/Hero'

export default function Home() {

  const pageRef = useRef(null)
  return (
    <div className={styles.container}>
      <Canvas id="canvas">
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 0.5]} />
        <ambientLight args={['white', 0.4]} />
        <pointLight position={[5, 5, 10]} />
        <Sprayer pageRef={pageRef} />
      </Canvas>

      <div ref={pageRef}>
        <Hero />
        <section> section 1</section>
        <section> section 2</section>
        <section> section 3</section>
        <section> section 4</section>
        <section> section 5</section>
        <section> section 6</section>
      </div>
    </div>
  )
}
