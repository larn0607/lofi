import React, { useState, useEffect } from 'react'

import {
  IntroScreen,
  Background,
  Audio,
  Navbar,
  Menu,
  BackgroundPopover,
  Overlay
} from './components/'

import './App.scss'

function App() {
  const [isIntro, setIsIntro] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setIsIntro(false)
    }, 1500)
    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    <>
      <IntroScreen isIntro={isIntro} />
      {window.innerWidth < '600' && <Overlay />}
      <Navbar />
      <BackgroundPopover />
      <Background />
      <Menu />
      <Audio />
    </>
  )
}

export default App
