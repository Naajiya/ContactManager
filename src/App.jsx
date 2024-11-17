import { useState } from 'react'

import './App.css'
import Add from './components/Add'
import View from './components/View'



function App() {


  return (
    <>
      <div className='container'>
        <div className='d-felx align-items-center justify-content-center text-center' style={{minHeight:'100vh'}}>
          <Add/>
          <View/>
        </div>
      </div>
    </>
  )
}

export default App
