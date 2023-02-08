import React from 'react';

const Tajriba = () => {
    return (
      <>
        <section id='experience'>
          <div className='container'>
            <h2 className='section-title'>Work Experience</h2>
            <div className='experience-timeline'>
              <div className='experience-item'>
                <div className='experience-year'>2022</div>
                <h3 className='experience-title'>Internship at XYZ Company</h3>
                <p className='experience-description'>
                  I had the opportunity to work as an intern at XYZ Company
                  where I learned the basics of web development and gained
                  hands-on experience in various projects.
                </p>
              </div>
              <div className='experience-item'>
                <div className='experience-year'>2021</div>
                <h3 className='experience-title'>Freelance Web Development</h3>
                <p className='experience-description'>
                  I started taking freelance web development projects to improve
                  my skills and gain more experience in the field.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
};

export default Tajriba;