import React from 'react'
import "./Resume.scss"
const Resume = () => {
  return (
    <section id='resume'>
      <div className='container'>
        <h2 className='section-title'>Resume</h2>
        <div className='resume-item'>
          <h3 className='resume-item-title'>Professional Experience</h3>
          <div className='resume-item-details'>
            <h4 className='resume-item-position'>Full Stack Developer</h4>
            <p className='resume-item-company'>ABC Company</p>
            <p className='resume-item-time'>May 2019 - Present</p>
            <p className='resume-item-description'>
              Worked on several projects using React, Node.js, and MongoDB to
              develop full-stack web applications. Collaborated with the design
              team to implement responsive design and ensure a seamless user
              experience.
            </p>
          </div>
        </div>

        <div className='resume-item'>
          <h3 className='resume-item-title'>Education</h3>
          <div className='resume-item-details'>
            <h4 className='resume-item-position'>
              Bachelor of Science in Computer Science
            </h4>
            <p className='resume-item-company'>University of XYZ</p>
            <p className='resume-item-time'>2015 - 2019</p>
            <p className='resume-item-description'>
              Graduated with honors and received a bachelor's degree in Computer
              Science. Completed several projects in web development, data
              structures, and algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
