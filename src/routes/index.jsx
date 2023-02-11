import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboute from '../pages/Aboute/Aboute'
import Portfolio from '../pages/Portfolio/Portfolio'
import Skills from '../pages/Skills/Skills'
import Service from '../pages/Service/Service'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Aboute />} />
      <Route path='/porfolio' element={<Portfolio />} />
      <Route path='/service' element={<Service />} />
      <Route path='/skils' element={<Skills />} />
    </Routes>
  )
}

export default index
