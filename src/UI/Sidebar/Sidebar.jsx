import React from 'react'
import './sidebar.scss'
import SidebarLink from '../../components/SidebarLink'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const sidebarlink = [
    { title: 'Profil', route: '/', icon: 'fa-solid fa-user' },
    {
      title: 'aboute',
      route: '/aboute',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'portfolio',
      route: '/porfolio',
      icon: 'fa-sharp fa-solid fa-diagram-project',
    },
    {
      title: 'resume',
      route: '/resume',
      icon: 'fa-solid fa-file',
    },
    { title: 'service', route: '/service', icon: 'fa-brands fa-servicestack' },
    { title: 'skils', route: '/skils', icon: 'fa-solid fa-school' },
    { title: 'experience', route: '/tajribam', icon: 'bi bi-hourglass-split' },
  ]
  return (
    <>
      <section className='sidebar'>
        <div className='sidebar__logo'>
          <Link to='/'>Abduhamid dev</Link>
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
        <div className='sidebar__copy'>
          <span>@Created by abduhamid</span>
        </div>
      </section>
    </>
  )
}

export default Sidebar
