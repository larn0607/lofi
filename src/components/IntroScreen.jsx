import React from 'react'
import { logoGif } from '../assets/images'

const IntroScreen = ({ isIntro }) => {
  return (
    <div className={`intro-screen${isIntro ? '' : ' hide'}`}>
      <img src={logoGif} alt="logo" width={300} />
    </div>
  )
}

export default IntroScreen