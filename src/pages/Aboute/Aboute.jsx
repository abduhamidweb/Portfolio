import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Aboute.scss'
import myimg from "../../assets/images/myphoto.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper'

const Aboute = () => {
  return (
    <>
      <section id='aboute' className='aboute'>
        <div className='container aboute-container'>
          <div className='aboute-container__row'>
            <div className='aboute-container__row__col__1'>
              <h3 className='aboute-container__row__col__1__title'>Col 1</h3>
            </div>
            <div className='aboute-container__row__col__2'>
              <h3 className='aboute-container__row__col__2__title'>Col 2</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboute
