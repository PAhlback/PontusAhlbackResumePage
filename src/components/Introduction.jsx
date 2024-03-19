import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const Introduction = () => {
  return (
    <section id="home" className='page-intro hero-image'>
        <article className='introduction'>
            <h1>Pontus Ahlbäck</h1>
            <p>Hello and welcome to my resume! I am a classical guitarist, teacher and soon-to-be programmer. Scroll down to read more!</p>
        </article>
        <h3 className='scroll-down-arrow'><FaArrowDown /></h3>
    </section>
  )
}

export default Introduction