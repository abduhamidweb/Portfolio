import React from 'react'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { isSidebar2 } from '../features/counter/counterSlice'
const Headre = () => {
  const dispatch = useDispatch()
  function handlerToggle() {
    dispatch(isSidebar2())
  }
  return (
    <>
      <div className='header'>
        <div className='header__wrapper'>
          <button className='header__wrapper__btn' onClick={handlerToggle}>
            <i className='bi bi-list' title='toggle'></i>
          </button>
          <div className='header__wrapper__right'>
            <div className='formSelector'>
              <select className='form-wrap w-50 selector'>
                <option disabled selected>
                  lang
                </option>
                <option>eng</option>
                <option>rus</option>
                <option>uzb</option>
              </select>
            </div>
            <div className='dark__mode'>
              <label className='switch'>
                <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headre
