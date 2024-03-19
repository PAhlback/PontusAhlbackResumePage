import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaSoundcloud } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <div className='copyright'>
            <p>
                Copyright &#169; Pontus Ahlbäck
            </p>
        </div>
        <div>
            <ul>
                <li>
                    <a href="https://github.com/PAhlback" target='_blank'><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/pontus-ahlback/" target='_blank'><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@DuoDecem" target='_blank'><FaYoutube /></a>
                </li>
                <li>
                    <a href="https://soundcloud.com/user-386636421" target='_blank'><FaSoundcloud /></a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer