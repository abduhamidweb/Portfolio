import React from 'react'
import './header.scss'
const Headre = () => {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <button className='header__wrapper__btn'>
              <i class='bi bi-list'></i>
            </button>
            <div className='header__wrapper__right'>
              <select className='form-control w-50'>
                <option selected disabled>
                  lang
                </option>
                <option>eng</option>
                <option>rus</option>
                <option>uzb</option>
              </select>
              <div className='dark__mode'>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider'></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headre
