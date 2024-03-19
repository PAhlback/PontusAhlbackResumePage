import React from 'react'

import Data from '../data/experience-card-data.json'

import './ExperienceCard.css'

const ExperienceCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='experience-card' key={d.headline}>
                        <h3 className='exp-head'>{d.headline}</h3>
                        <p className='exp-desc'>{d.description}</p>
                        <ul className='exp-list'>
                            {
                                d.experience.map((exp, index) => {
                                    return(
                                        <li key={`${d.headline}-${index}`}>
                                            {exp}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </article>
                )
            })
        }
    
    </>
  )
}

export default ExperienceCard