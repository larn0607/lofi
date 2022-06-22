import React, { useState, useEffect } from 'react'

import {
  IntroScreen,
  Background,
  Audio,
  Navbar,
  Menu
} from './components/'

import './App.scss'

function App() {

    const [isIntro, setIsIntro] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setIsIntro(false)
    }, 3000)

    return () => {
      clearTimeout(time)
    }

  }, [])

  return (
    <>
      {/* {isIntro ? <IntroScreen /> : ( */}
        <>
        <Navbar />
        <Background />
        <Menu />
        <Audio />
        </>
      {/* )}  */}
    </>
  )
}

export default App;
