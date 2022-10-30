import { useRef } from 'react'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Model from '../components/Model'

export default function Home() {

  const pageRef = useRef(null)
  return (
    <div className={styles.container}>
      {/* <canvas className={styles.main}> Hello</canvas> */}
      <Canvas id="canvas">
        <PerspectiveCamera makeDefault fov={65} position={[0, 0, 0.5]} />
        <ambientLight args={['white', 0.4]} />
        <pointLight position={[5, 5, 10]} />
        <Model pageRef={pageRef} />
        {/* <OrbitControls /> */}
      </Canvas>

      <div ref={pageRef}>
        <section className='hero-section'>
          <h1> Sprayer buid with latest technology to maximise efficiency</h1>
          <p> absolute to section B2 so the model will stick in section B2 after scrolling </p>
        </section>
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
