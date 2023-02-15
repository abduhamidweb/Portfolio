import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
      <div className='col-lg-3 col-md-6 col-sm-12'>
        <div class='card mx-auto'>
          <Link to={`/portfolio/12`}>
            <img src='https://picsum.photos/350/233' alt='Example image' />
          </Link>
          <div className='card-info'>
            <div className='card-title'>
              <h5 className='title'>Example Title</h5>
              <span className='stars'>
                <i className='far fa-heart'></i> 10
              </span>
            </div>
            <div className='card-description'>Example description </div>
            <div className='card-viewer'>
              <a href='http://example.com' target='_blank'>
                <i className='far fa-eye'></i> 100 Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
