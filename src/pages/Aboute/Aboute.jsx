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
              <h1 className='aboute-container__row__col__1__title'>
                I know
                <span className='jops ms-2' ref={el} />
              </h1>
              <p className='description'>
                As a Junior Full Stack Web Developer, I have a unique
                combination of technical skills and creative problem-solving
                skills that enable you to design and build user-friendly and
                effective websites.
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
