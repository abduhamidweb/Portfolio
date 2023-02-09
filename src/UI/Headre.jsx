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
            <i className='bi bi-list'></i>
          </button>
          <div className='header__wrapper__right'>
            <select className='form-control w-50'>
              <option defaultValue={'s'} disabled>
                lang
              </option>
              <option value={'sj'}>eng</option>
              <option value={'sj'}>rus</option>
              <option value={'sj'}>uzb</option>
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
    </>
  )
}

export default Headre
