import React, { useState, useEffect, useCallback } from 'react'
import { logoGif } from '../../assets/images'
import { fullscreenIcon, volumeActiveIcon, volumeMutedIcon } from '../../assets/icons'
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
  const [isVolumeActive, setIsVolumeActive] = useState(true)

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

  const handleChangeDayNight = useCallback(() => {
    setIsToggle(!isToggle)
    dispatch(
      changeBackground({
        set: background.set,
        scene: background.scene,
        day: isToggle === 'false' ? background.day : !background.day
      })
    )
  }, [dispatch, isToggle, background])

  const handleChangePixel = useCallback(() => {
    dispatch(changePixelBackground({
      set: background.set,
      scene: background.scene,
      pixel: !pixel
    }))
    setPixel(!pixel)
  },[dispatch, background, pixel])

  const handleActiveVolume = useCallback(() => {
    const audio = document.querySelectorAll('audio')
    setIsVolumeActive(!isVolumeActive)
    audio.forEach(el => el.muted = isVolumeActive)
  }, [isVolumeActive])

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoGif} width={170} alt="logo" />
      </div>
      <Button className="navbar__btn volume" onClick={handleActiveVolume}>
        <img src={isVolumeActive ? volumeActiveIcon : volumeMutedIcon} alt="volume-active" />
      </Button>
      <Button className="navbar__btn" onClick={handleFullScreen}>
        <img src={fullscreenIcon} alt="full-screen" />
      </Button>
      {(['forest', 'summer'].includes(background.set) && background.scene === 'scene2') && <Pixel onClick={handleChangePixel} />}
      {['chill_vibes', 'cafe', 'book_cafe', 'kyoto', 'honolulu'].includes(background.set) && (
        <Switch isToggle={isToggle} handleToggle={handleChangeDayNight} />
      )}
    </nav>
  )
}

export default Navbar
