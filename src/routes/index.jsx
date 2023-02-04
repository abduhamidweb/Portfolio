import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from '../components/Test'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Test />} />
      <Route path='/profil' element={<Test />} />
      <Route path='/aboute' element={<Test />} />
      <Route path='/porfolio' element={<Test />} />
      <Route path='/resume' element={<Test />} />
      <Route path='/skils' element={<Test />} />
    </Routes>
  )
}

export default index
