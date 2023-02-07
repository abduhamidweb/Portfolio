import React from 'react'
import { useState } from 'react'
const Portfolio = () => {
  const [isDay, setIsDay] = useState(true)

  const toggleNightToDay = () => {
    setIsDay(!isDay)
  }
  return (
    <div style={{ backgroundColor: isDay ? '#fff' : '#000', height: '100vh' }}>
      <p onClick={toggleNightToDay}> dark mode</p>
    </div>
  )
}

export default Portfolio
