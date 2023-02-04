import React from 'react'
import './home.scss'
import Headre from '../../UI/Headre';
import RouterCopmt from "../../routes"
const Home = () => {
  return (
    <>
      <div className=' home'>
        <Headre />
        <div className='home__content'>
          <div className='container'>
            <RouterCopmt />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
