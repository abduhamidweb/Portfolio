import { useState } from 'react'
import './App.css'
import RouterComp from './routes/index'
import Sidebar from './UI/Sidebar/Sidebar'
function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <RouterComp />
      </div>
    </>
  )
}

export default App
