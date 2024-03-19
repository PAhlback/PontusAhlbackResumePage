import React from 'react'

import Data from '../data/education-card-data.json'

import './ExperienceCard.css'

const EducationCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='experience-card education-card' key={d.programName}>
                        <h3 className='exp-head'>{d.nameOfSchool}</h3>
                        <h5 className='program-name'>{d.programName}, {d.credits}</h5>
                        <h6 className='program-dur'>{d.duration}, {d.location}</h6>
                        <p className='exp-desc'>{d.description}</p>
                    </article>
                )
            })
        }
    </>
  )
}

export default EducationCard