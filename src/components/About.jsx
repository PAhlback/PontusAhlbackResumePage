import React from 'react'
import Picture from '../assets/images/PontusAhlbäckHandelsLunchkonsert3.jpg'

const About = () => {
    return (
        <section id="about" className='about-wrapper'>
            <article className='about-text'>
                <h2>ABOUT ME</h2>
                <p>
                    After getting my masters degree in classical music, and a pedagogy degree, 
                    I have been working as a freelance classical guitarist and a guitar 
                    and ensemble teacher. In 2018 I achieved my long term goal of competing in the 
                    two biggest guitar competitions in Sweden, and since then I’ve been playing concerts all around Stockholm,
                     partly as a soloist and partly in different ensembles as a chamber musician. Though I still very much 
                     enjoy playing and teaching, I am now pursuing a career as a web developer.
                </p>
            </article>
            <img src={Picture} alt="Picture of Pontus Ahlbäck holding a guitar" className='about-picture' />
        </section>
    )
}

export default About