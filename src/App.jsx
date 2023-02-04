import { useState } from 'react'
import './App.css'
import RouterComp from './routes/index'
import Sidebar from './UI/Sidebar/Sidebar'
import Home from './pages/Home/Home'
function App() {
  return (
    <>
      <div className='app'>
        
        <Sidebar />
<Home/>
        {/* <RouterComp /> */}
      </div>
    </>
  )
}

export default App
