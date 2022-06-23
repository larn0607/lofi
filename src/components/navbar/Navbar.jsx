import React, { useState, useEffect } from 'react'
import { logoGif } from '../../assets/images'
import { fullscreenIcon } from '../../assets/icons'
import { Button } from '../'

import Switch from './Switch'
import Pixel from './Pixel'

import { changeBackground, changePixelBackground } from '../../redux/slices/backgroundSlice'

import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const background = useSelector(state => state.background.background)

  const [isToggle, setIsToggle] = useState(false)
  const [pixel, setPixel] = useState(false)

  useEffect(() => {
    background.day ? setIsToggle(false) : setIsToggle(true)
  }, [background.day])
  
  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const handleChangeDayNight = () => {
    setIsToggle(!isToggle)
    dispatch(
      changeBackground({
        set: background.set,
        scene: background.scene,
        day: isToggle === 'false' ? background.day : !background.day
      })
    )
  }

  const handleChangePixel = () => {
    dispatch(changePixelBackground({
      set: background.set,
      scene: background.scene,
      pixel: !pixel
    }))
    setPixel(!pixel)
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoGif} width={170} alt="logo" />
      </div>
      <Button className="navbar__btn" onClick={handleFullScreen}>
        <img src={fullscreenIcon} alt="full-screen" />
      </Button>
      {(['forest', 'summer'].includes(background.set) && background.scene === 'scene2') && <Pixel onClick={handleChangePixel} />}
      {['chill_vibes', 'cafe', 'book_cafe'].includes(background.set) && (
        <Switch isToggle={isToggle} handleToggle={handleChangeDayNight} />
      )}
    </nav>
  )
}

export default Navbar
