import React, { useRef, useState } from 'react'
import './detail.scss'
import PortfolioDetailHeader from '../../components/PortfolioDetailHeader'

const DetailPage = () => {
  const [width, setWidth] = useState(70)
  return (
    <>
      <section className='detail'>
        <div className='container'>
          <div className='detail__content__wrap'>
            <div
              className='detail__content__col col-1__content mx-auto'
              style={{ width: `${width}%` }}
            >
              <div className='detail__content__col__header '>
                <PortfolioDetailHeader />
              </div>



              
              <div className='col-1__content__body'>
                <iframe
                  src='https://getbootstrap.com/'
                  className='col-1__content__body__iframe'
                ></iframe>
              </div>
              <div className='col-1__content__media mt-4'>
                <button
                  title='laptop'
                  onClick={() => {
                    setWidth(70)
                  }}
                >
                  <i className='bi bi-laptop'></i>
                </button>
                <button
                  title='phone'
                  onClick={() => {
                    setWidth(38)
                  }}
                >
                  <i className='bi bi-phone'></i>
                </button>
              </div>
            </div>

            <div className='detail__content__col col-2__content '>
              <div className='col-1__content__content'>
                <div className='col-1__content__content__title'>
                  <h2>Andromeda Light Nextjs</h2>
                </div>
                <div className='col-1__content__content__desc'>
                  <p>
                    Andromeda Light Nextjs is multipurpose SaaS theme designed
                    to showcase any SaaS product or solution
                  </p>
                </div>
                <div className='col-1__content__content__links'>
                  <a href='#'>Live Demo</a>
                  <a href='#'>github</a>
                </div>
                <div className='col-1__content__content__information'>
                  <h3>Theme Information:</h3>
                  <div className='information'>
                    <div className='item__information'>
                      <span className='key'>Stars :</span>
                      <span className='val'>value</span>
                    </div>
                    <div className='item__information'>
                      <span className='key'>Forks :</span>
                      <span className='val'>value</span>
                    </div>
                    <div className='item__information'>
                      <span className='key'>Updated :</span>
                      <span className='val'>value</span>
                    </div>
                    <div className='item__information'>
                      <span className='key'>Published :</span>
                      <span className='val'>value</span>
                    </div>
                    <div className='item__information'>
                      <span className='key'>Types :</span>
                      <span className='val'>value</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DetailPage
