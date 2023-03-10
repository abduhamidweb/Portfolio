import React, { useState } from 'react'
import './sidebar.scss'
import SidebarLink from '../../components/SidebarLink'
import { Link } from 'react-router-dom'
import myImg from '../../assets/images/myphoto.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { isSidebar2 } from '../../features/counter/counterSlice'
import languages from '../../lang/Lang'
const Sidebar = () => {
  const { isSidebar, lang } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  function handlerToggle() {
    dispatch(isSidebar2())
  }
  const { name } = languages[lang]

  const sidebarlink = [
    {
      title: 'aboute',
      route: '/',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'portfolio',
      route: '/portfolio',
      icon: 'fa-sharp fa-solid fa-diagram-project',
    },
    { title: 'service', route: '/service', icon: 'fa-brands fa-servicestack' },
    { title: 'contact', route: '/contact', icon: 'bi bi-person-lines-fill' },
  ]
  return (
    <>
      <section className={isSidebar ? 'sidebar' : 'closeSidebar'}>
        <div className='sidebar__logo'>
          <img src={myImg} alt='my img' className='myimg' />
        </div>
        <div className='sidebar__name'>
          <Link to={'/'} title='home'>
            {name ? name : 'Abduhamid Botirov '}
          </Link>
        </div>
        <div className='sidebar__icons'>
          <a
            href='https://facebook.com'
            target={'_blank'}
            className='link-secondary'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/abduhamid-botirov-91a44b253/'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://github.com/abduhamidweb'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
        <ul className='sidebar__lists'>
          {sidebarlink.map((item) => {
            return (
              <li className='sidebar__lists__items' key={item.title}>
                <SidebarLink
                  title={item.title}
                  route={item.route}
                  icon={item.icon}
                />
              </li>
            )
          })}
        </ul>

        <div className='sidebar__copy'>
          <span>?? Copyright Portfolio Designed by Abduhamid</span>
        </div>
      </section>
      <section className={isSidebar ? 'closeSidebar ' : 'sidebar2'}>
        <div className='toggle_icons_to_sidebar'>
          <button className='header__wrapper__btn' onClick={handlerToggle}>
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
        <div className='sidebar__logo'>
          <img src={myImg} alt='my img' className='myimg' />
        </div>
        <div className='sidebar__name'>
          <Link to={'/'}>abduhamid botirov</Link>
        </div>
        <div className='sidebar__icons'>
          <a
            href='https://facebook.com'
            target={'_blank'}
            className='link-secondary'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/abduhamid-botirov-91a44b253/'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://github.com/abduhamidweb'
            target='_blank'
            className=' link-secondary'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
        <ul className='sidebar__lists'>
          {sidebarlink.map((item) => {
            return (
              <li className='sidebar__lists__items' key={item.title}>
                <SidebarLink
                  title={item.title}
                  route={item.route}
                  icon={item.icon}
                />
              </li>
            )
          })}
        </ul>
        <div className='sidebar__copy'>
          <span>?? Copyright Portfolio Designed by Abduhamid</span>
        </div>
      </section>
      {!isSidebar ? (
        <div className='sidebar__wrap' onClick={handlerToggle}></div>
      ) : (
        ''
      )}
    </>
  )
}

export default Sidebar
