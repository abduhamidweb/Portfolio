import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from '../components/Test'
import Profile from '../pages/Frofile/Profile'
import Aboute from '../pages/Aboute/Aboute'
import Portfolio from '../pages/Portfolio/Portfolio'
import Resume from '../pages/Resume/Resume'
import Skills from '../pages/Skills/Skills'
import Tajriba from '../pages/Tajriba/Tajriba'
import Supplements from '../pages/Supplements/Supplements'
import Service from '../pages/Service/Service'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Test />} />
      <Route path='/profil' element={<Profile />} />
      <Route path='/aboute' element={<Aboute />} />
      <Route path='/porfolio' element={<Portfolio />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/service' element={<Service />} />
      <Route path='/skils' element={<Skills />} />
      <Route path='/tajribam' element={<Tajriba />} />
      <Route path='/Supplements' element={<Supplements />} />
    </Routes>
  )
}

export default index
