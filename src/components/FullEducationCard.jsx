import React from 'react'

import Data from '../data/full-education.json'
import './FullEduExpCardStyle.css'

const FullEducationCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='full-card' key={d.id} style={{
                        backgroundColor: `${d.id % 2 == 0 ? 'white' : '#222'}`,
                        color: `${d.id % 2 == 0 ? 'black' : 'white'}`}}>
                        <h3 className='full-card-head' style={{borderBottom: `${d.id % 2 == 0 ? '1px solid black' : '1px solid white'}`}}>{d.nameOfSchool}</h3>
                        <h5 className='full-card-title'>{d.programName}, {d.credits}</h5>
                        <h6 className='full-card-dur-loc'>{d.duration}, {d.location}</h6>
                        <p className='full-card-desc'>{d.description}</p>
                    </article>
                )
            })
        }
    </>
  )
}

export default FullEducationCard