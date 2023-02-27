import React from 'react'
import './home.scss'
import Headre from '../../UI/Headre'
import RouterCopmt from '../../routes'
import Footer from '../../UI/Footer'
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
        {/* <div className='home__content footer'>
          <div className='container'>
            <Footer />
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Home
