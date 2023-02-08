import React from 'react'
import './Skills.scss'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container'>
        <h2 className='section-title'>Skills</h2>
        <div className='skills-list'>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(nodejs-icon.png)' }}
            ></div>
            <h3 className='skill-name'>Node.js/Express</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(html-icon.png)' }}
            ></div>
            <h3 className='skill-name'>HTML</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(css-icon.png)' }}
            ></div>
            <h3 className='skill-name'>CSS</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(javascript-icon.png)' }}
            ></div>
            <h3 className='skill-name'>JavaScript</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(react-icon.png)' }}
            ></div>
            <h3 className='skill-name'>React</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(redux-icon.png)' }}
            ></div>
            <h3 className='skill-name'>Redux</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(typescript-icon.png)' }}
            ></div>
            <h3 className='skill-name'>TypeScript</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(tailwind-icon.png)' }}
            ></div>
            <h3 className='skill-name'>Tailwind</h3>
          </div>
          <div className='skill-item'>
            <div
              className='skill-icon'
              style={{ backgroundImage: 'url(bootstrap-icon.png)' }}
            ></div>
            <h3 className='skill-name'>Bootstrap</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
