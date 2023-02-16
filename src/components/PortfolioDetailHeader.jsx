import React from 'react'
import './portfoliodetailheader.scss'
const PortfolioDetailHeader = () => {
  return (
    <>
      <div className='addElement'>
        <div className='laptop_icons'>
          <span className='red'></span>
          <span className='brown'></span>
          <span className='green'></span>
        </div>
        <span className='iconToWebsite'>
          <a href='https://getbootstrap.com/' target='_blank'>
            <i className='bi bi-arrow-up-right-square-fill text-light'></i>
          </a>
        </span>
      </div>
    </>
  )
}

export default PortfolioDetailHeader
