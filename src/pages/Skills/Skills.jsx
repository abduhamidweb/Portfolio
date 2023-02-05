import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Skills.scss'

const Skills = () => {
  return (
    <div className='skills-container'>
      <h2 className='section-title'>Skills</h2>
      <div class='card text-center mx-auto my-5 shadow'>
        <div class='card-body'>
          <h5 class='card-title text-primary font-weight-bold'>
            Creative Design
          </h5>
          <p class='card-text text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum
            neque eu magna euismod, ut commodo libero pellentesque. Nam dictum
            est a justo commodo bibendum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
