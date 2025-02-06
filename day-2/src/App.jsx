import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Fetching from './components/Fetching'
import Debounce from './components/Debouncing'

function App() {
  return (
    <>
      <div>
        <Timer/>
        {/* <Fetching/> */}
        <Debounce/>
      </div>
    </>
  )
}

export default App
