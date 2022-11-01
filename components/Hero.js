import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

const Hero = () => {

    const headerText = useRef(null)
    
    useEffect(() => {
        console.log(headerText.current)
        
        const text = new SplitType(headerText.current, { types: 'words, chars'})
        // console.log(text.chars);
        gsap.to(text.chars, {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        })
    }, [])
    

    return (
        <>
            <section className='hero-section'>
                <h1 ref={headerText}> Sprayer buid with latest technology to maximise efficiency</h1>
                <p> absolute to section B2 so the model will stick in section B2 after scrolling </p>
            </section>
        </>
    )
}

export default Hero