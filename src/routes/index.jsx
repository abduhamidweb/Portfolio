import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboute from '../pages/Aboute/Aboute'
import Portfolio from '../pages/Portfolio/Portfolio'
import Skills from '../pages/Skills/Skills'
import Service from '../pages/Service/Service'
import Contact from '../pages/contact/Contact'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Aboute />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/service' element={<Service />} />
      <Route path='/skils' element={<Skills />} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default index
