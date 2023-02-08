import React from 'react';
import "./service.scss"
const Service = () => {
    return (
      <>
        <section id='services'>
          <div className='container'>
            <h2 className='section-title'>Our Services</h2>
            <div className='services-list'>
              <div className='service'>
                <div className='service-icon'>
                  <i className='fas fa-desktop'></i>
                </div>
                <h3 className='service-title'>Web Development</h3>
                <p className='service-description'>
                  We offer professional web development services to help bring
                  your ideas to life.
                </p>
              </div>
              <div className='service'>
                <div className='service-icon'>
                  <i className='fas fa-mobile-alt'></i>
                </div>
                <h3 className='service-title'>Mobile Development</h3>
                <p className='service-description'>
                  We provide top-notch mobile app development services for both
                  iOS and Android platforms.
                </p>
              </div>
              <div className='service'>
                <div className='service-icon'>
                  <i className='fas fa-magic'></i>
                </div>
                <h3 className='service-title'>UX/UI Design</h3>
                <p className='service-description'>
                  We offer professional UX/UI design services to help enhance
                  the user experience of your website or app.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
};

export default Service