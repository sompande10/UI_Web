import React from 'react'
import { Navbar } from './components'
import {Landing,About} from './pages'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Landing/>
    {/* <About/> */}
    </div>
    
  )
}

export default App