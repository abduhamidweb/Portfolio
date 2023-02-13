import React, { useRef, useEffect } from 'react'
import './Aboute.scss'
import myimg from '../../assets/images/myphoto.jpg'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'
const Aboute = () => {
  const el = useRef(null)
  const typed = useRef(null)

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
              <h2>hi! 👋</h2>
              <h2> I'm full stack developer. </h2>
              <p>Hello! My name is Abduhamid, and I am a web developer.</p>
              <p>
                I have a passion for creating intuitive, user-friendly websites
                and web applications. With 2022 years of experience, I have a
                solid understanding of <span className='jops ms-2' ref={el} />
              </p>
              <p>
                When I'm not coding, you can find me [insert hobby or personal
                interest].
              </p>
              <p>
                Feel free to take a look at my <a href='/projects'>projects</a>{' '}
                to see some of my recent work, or{' '}
                <a href='/contact'>contact me</a> if you'd like to work
                together.
              </p>
              <Link to={'/portfolio'}>Portfolio</Link>
              <Link to={'/resume'}>Resume</Link>
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
