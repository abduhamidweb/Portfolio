import React from 'react'
import './header.scss'
const Headre = () => {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <button className='header__wrapper__btn'>
              <i className='bi bi-list'></i>
            </button>
            <div className='header__wrapper__right'>
              <select className='form-control w-50'  >
                <option defaultValue={"s"} disabled>
                  lang
                </option>
                <option value={"sj"}>eng</option>
                <option value={"sj"}>rus</option>
                <option value={"sj"}>uzb</option>
              </select>
              <div className='dark__mode'>
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider'></span>
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
