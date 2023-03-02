import React from 'react'
import { useState } from 'react'
import './portfolio.scss'
import Card from '../../components/Card'
const Portfolio = () => {
  const [isDay, setIsDay] = useState(true)

  const toggleNightToDay = () => {
    setIsDay(!isDay)
  }
  return (
    // <div style={{ backgroundColor: isDay ? '#fff' : '#000', height: '100vh' }}>
    //   <p onClick={toggleNightToDay}> dark mode</p>
    // </div>
    <>
      {/* <section className='portfolio'>
        <div className='container'>
          <div className='row row__twoo'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section> */}
         <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Front-end</li>
              <li data-filter=".filter-card">Backend</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                  class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Portfolio
