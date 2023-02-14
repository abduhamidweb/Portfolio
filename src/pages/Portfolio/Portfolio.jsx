import React from 'react'
import { useState } from 'react'
import './portfolio.scss'
import Card from '../../components/Card'
const Portfolio = () => {
  const [isDay, setIsDay] = useState(true)

  const toggleNightToDay = () => {
    setIsDay(!isDay)
  }
  return (
    // <div style={{ backgroundColor: isDay ? '#fff' : '#000', height: '100vh' }}>
    //   <p onClick={toggleNightToDay}> dark mode</p>
    // </div>
    <>
      <section className='portfolio'>
        <div className='container'>
          <div className='row row__twoo'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
