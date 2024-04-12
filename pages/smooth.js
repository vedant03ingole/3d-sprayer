import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


const Smooth = () => {
 
  const containerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    // console.log(containerRef);
    // console.log(containerRef.current.children);

    let sections = gsap.utils.toArray(containerRef.current.children)
    console.log(sections);

    if(!!containerRef.current) {
      gsap.to(sections, {
        xPercent: -100 * sections.length - 1,
        ease: "none",
        scrollTrigger: {
          pin: true,
          trigger: containerRef.current,
          markers: true,
          scrub: 1,
          end: () => "+=" + containerRef.current.offsetWidth
        }
      })
    }
  }, [])
  


  return (
    <div className='parent-container'>
      <div className='intro-div'>Intorduction</div>
      <div className='horizontal-container' ref={containerRef}>
        <section className='hor-section'></section>
        <section className='hor-section'></section>
        <section className='hor-section'></section>
        <section className='hor-section'></section>
      </div>
      <div className='intro-div'>End</div>
    </div>
  )
}

export default Smooth