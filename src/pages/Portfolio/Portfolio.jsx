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
        <div class='section-title'>
          <h2>portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className='container'>
          <div className='row row__twoo'>
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
