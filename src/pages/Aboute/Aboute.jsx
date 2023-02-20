import React, { useRef, useEffect } from 'react'
import './Aboute.scss'
import myimg from '../../assets/images/person.png'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import languages from '../../lang/Lang'
import { useSelector } from 'react-redux'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
// Animation
const Aboute = () => {
  const { lang } = useSelector((state) => state.counter)
  const el = useRef(null)
  const typed = useRef(null)
  // const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f']
  useEffect(() => {
    const options = {
      strings: [
        'Html/Css',
        'Bootstrap/MDB',
        'Material-UI',
        'Javascript.',
        'TypeScript.',
        'React Js.',
        'Redux/toolkid.',
        'NodeJs',
        'ExpressJs',
        'eJs',
      ],
      typeSpeed: 60,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos) => {
        el.current.style.color = colors[arrayPos]
      },
    }

    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])

  const { hello, about, creative, find, search1, search2, search3 } =
    languages[lang]
  return (
    <>
      <section id='aboute' className='aboute'>
        <div className='container aboute-container'>
          <div className='aboute-container__row'>
            <div className='aboute-container__row__col__1'>
              <h2 className='hello'>{hello}! 👋</h2>
              <p className='name'> {about}</p>
              <p>
                {creative} <span className='jops ms-2' ref={el} />
              </p>
              <p className='hobbiy'>
                {find}
                <a
                  href='https://t.me/AbduhamidBotirov'
                  target='_blank'
                  className='ms-2'
                >
                  Telegram
                </a>
                <a
                  href='https://www.instagram.com/code_snape_photo/'
                  target='_blank'
                  className='ms-2'
                >
                  Instagram
                </a>
                <a href='#' className='mx-2'>
                  Facebook
                </a>
                <a
                  href='https://www.linkedin.com/in/abduhamid-botirov-91a44b253/'
                  target='_blank'
                  className=''
                >
                  Linkeden
                </a>
                <a
                  href='https://github.com/abduhamidweb'
                  target='_blank'
                  className='ms-2'
                >
                  Github
                </a>
                .
              </p>
              <p className='links'>
                {search1}
                <a href='/projects'> projects </a> {search2}
                <Link to='/contact'> contact me </Link> {search3}
              </p>
              <div className='portfolioOrResume mt-4 mb-4'>
                <Link to={'/portfolio'} className='porfolio'>
                  Portfolio
                </Link>
                <Link to={'/resume'} className='ms-3'>
                  Resume
                </Link>
              </div>
            </div>
            <div
              className='aboute-container__row__col__2'
              // data-aos='fade-up'
              // data-aos-offset='200'
              // data-aos-delay='50'
              // data-aos-duration='700'
              // data-aos-easing='ease-in-out'
              // data-aos-mirror='true'
              // data-aos-once='false'
              // data-aos-anchor-placement='top-center'
            >
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className='mySwiper'
              >
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='img-wrapper'>
                    <img src={myimg} alt='img' className='img-fluid' />
                  </div>
                </SwiperSlide>
                <div className='autoplay-progress' slot='container-end'>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboute
