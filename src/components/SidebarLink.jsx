import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ title, route, icon }) => {
  return (
    <>
      {/* className='sidebar__lists__items__link active__link' */}
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive
            ? 'sidebar__lists__items__link active__link'
            : 'sidebar__lists__items__link'
        }
      >
        <span className='icons'>
          <i className={icon}></i>
          <i class='fa-sharp fa-solid fa-rectangle-history'></i>
        </span>
        <span className='text'>{title}</span>
        <span className='iconActive'>
          <i className='fa-sharp fa-solid fa-angle-right'></i>
        </span>
      </NavLink>
    </>
  )
}

export default SidebarLink
