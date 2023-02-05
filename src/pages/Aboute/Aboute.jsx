import React from 'react';
import "./Aboute.scss"
const Aboute = () => {
    return (
      <>
        <div className='about-container'>
          <h2 className='section-title'>About Me</h2>
          <p className='about-description'>
            Hi, I'm a software developer with a passion for creating beautiful
            and functional websites. I have a strong background in front-end
            technologies such as React, HTML, CSS, and JavaScript. I also have
            experience with back-end technologies such as Node.js, Express, and
            MongoDB.
          </p>
          <p className='about-description'>
            My goal is to always create high-quality, user-friendly web
            applications that meet the needs of my clients. I enjoy the
            challenge of taking a complex problem and breaking it down into
            smaller, manageable tasks in order to find the best solution.
          </p>
          <p className='about-description'>
            When I'm not coding, I love to travel, read, and try new
            restaurants. I also enjoy playing piano and guitar.
          </p>
        </div>
      </>
    )
};

export default Aboute;