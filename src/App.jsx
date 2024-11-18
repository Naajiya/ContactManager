import { useState } from 'react'

import './App.css'
import Add from './components/Add'
import View from './components/View'



function App() {

  const [addContactResp,setAddContactResp]=useState('')
  return (
    <>
      <div className='container'>
        <div className='d-felx align-items-center justify-content-center text-center' style={{minHeight:'100vh'}}>
          <Add setAddContactResp={setAddContactResp}/>
          <View addContactResp={addContactResp}/>
        </div>
      </div>
    </>
  )
}

export default App
