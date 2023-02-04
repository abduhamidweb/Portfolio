import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ title, route }) => {
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
          <i class='bi bi-person'></i>
        </span>
        <span className='text'>{title}</span>
      </NavLink>
    </>
  )
}

export default SidebarLink
