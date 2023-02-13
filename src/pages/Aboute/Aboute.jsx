import React, { useRef, useEffect } from 'react'
import './Aboute.scss'
import myimg from '../../assets/images/myphoto.jpg'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'
const Aboute = () => {
  const el = useRef(null)
  const typed = useRef(null)
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
  return (
    <>
      <section id='aboute' className='aboute'>
        <div className='container aboute-container'>
          <div className='aboute-container__row'>
            <div className='aboute-container__row__col__1'>
              <h2 className='hello'>Hello!! 👋</h2>
              <p className='name'>
                {' '}
                My name is Abduhamid, and I am a web developer.
              </p>
              <p className='skills'>
                I have a passion for creating intuitive, user-friendly websites
                and web applications. With 2022 years of experience, I have a
                solid understanding of <span className='jops ms-2' ref={el} />
              </p>
              <p className='hobbiy'>
                When I'm not coding, you can find me
                <a href='#' className='ms-2'>
                  Telegram
                </a>
                <a href='#' className='ms-2'>
                  Instagram
                </a>
                <a href='#' className='ms-2'>
                  Facebook
                </a>
                <a href='#' className='ms-2'>
                  Linkeden
                </a>
                <a href='#' className='ms-2'>
                  Github
                </a>
                .
              </p>
              <p className='links'>
                Feel free to take a look at my <a href='/projects'>projects</a>{' '}
                to see some of my recent work, or{' '}
                <a href='/contact'>contact me</a> if you'd like to work
                together.
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
