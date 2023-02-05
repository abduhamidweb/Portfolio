import React from 'react'
import './sidebar.scss'
import SidebarLink from '../../components/SidebarLink'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const sidebarlink = [
    { title: 'Profil', route: '/' },
    { title: 'aboute', route: '/aboute' },
    { title: 'porfolio', route: '/porfolio' },
    { title: 'resume', route: '/resume' },
    { title: 'skils', route: '/skils' },
    { title: 'tajribam', route: '/tajribam' },
  ]
  return (
    <>
      <section className='sidebar'>
        <div className='sidebar__logo'>
          <Link to='/'>LOGO</Link>
        </div>
        <ul className='sidebar__lists'>
          {sidebarlink.map((item) => {
            return (
              <li className='sidebar__lists__items'>
                <SidebarLink title={item.title} route={item.route} />
              </li>
            )
          })}
        </ul>
        <div className='sidebar__icons'>
          <a href='' class=' link-secondary'>
            <i class='fab fa-facebook-f'></i>
          </a>
          <a href='' class=' link-secondary'>
            <i class='fab fa-twitter'></i>
          </a>
          <a href='' class=' link-secondary'>
            <i class='fab fa-linkedin'></i>
          </a>
          <a href='' class=' link-secondary'>
            <i class='fab fa-github'></i>
          </a>
        </div>
        <div className='sidebar__copy'>
          <span>@created by abduhamid</span>
        </div>
      </section>
    </>
  )
}

export default Sidebar
