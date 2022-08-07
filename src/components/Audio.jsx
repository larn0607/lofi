import React, { useEffect, useRef, useContext, useCallback } from 'react'

import { nextIcon, pauseIcon, playIcon, prevIcon } from '../assets/icons'
import { Button } from './'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSong, setIsPlaying } from '../redux/slices/audioSlice'

import { NOISES } from '../constants/'

import { AudioContext } from '../context/AudioProvider'

const Audio = () => {
  const noisesRefs = useContext(AudioContext)
  const audioRef = useRef(null)
  const currentSong = useSelector(state => state.audio.currentSong)
  const volumeValue = useSelector(state => state.audio.volumeValue)
  const isPlaying = useSelector(state => state.audio.isPlaying)
  const { noisesValue } = useSelector(state => state.noises)
  const dispatch = useDispatch()


  useEffect(() => {
    audioRef.current.volume = volumeValue
  }, [volumeValue])

  useEffect(() => {
    noisesRefs.current.forEach((item, index) => {
      item.volume = noisesValue[Object.keys(noisesValue)[index]] / 100
    })
  }, [noisesRefs, noisesValue])

  const handlePlay = useCallback(() => {
    dispatch(setIsPlaying(true))
    if (audioRef.current.paused) audioRef.current.play()
  }, [dispatch])

  const handlePause = useCallback(() => {
    dispatch(setIsPlaying(false))
    if (!audioRef.current.paused) audioRef.current.pause()
  }, [dispatch])

  const nextSong = useCallback((list, currentIndex) => {
    let newIndex
    if (currentIndex < 0 || currentIndex >= list.length - 1) {
      newIndex = 0
    } else {
      newIndex = currentIndex + 1
    }

    return { index: newIndex, src: list[newIndex] }
  }, [])

  const prevSong = useCallback((list, currentIndex) => {
    let newIndex
    if (currentIndex <= 0 || currentIndex > list.length - 1) {
      newIndex = list.length - 1
    } else {
      newIndex = currentIndex - 1
    }
    return { index: newIndex, src: list[newIndex] }
  }, [])

  useEffect(() => {
    const handlePlayMusic = (e) => {
      if(e.keyCode === 32 && e.shiftKey) {
        !isPlaying ? handlePlay() : handlePause()
      }
    }
    window.addEventListener('keydown', handlePlayMusic)

    return () => {
      window.removeEventListener('keydown', handlePlayMusic)
    }
  }, [handlePlay, handlePause, isPlaying])

    useEffect(() => {
    const nextKeyCode = e => {
      if(e.keyCode === 78 && e.shiftKey) {
        dispatch(setCurrentSong({
          ...currentSong,
          index: nextSong(currentSong.list, currentSong.index).index,
          src: nextSong(currentSong.list, currentSong.index).src
        }))
      }
    }
    window.addEventListener('keydown', nextKeyCode)

    return () => {
      window.removeEventListener('keydown', nextKeyCode)
    }
  }, [dispatch, currentSong, nextSong, isPlaying])

  useEffect(() => {
    const prevSongKeyCode = e => {
      if(e.keyCode === 80 && e.shiftKey) {
        dispatch(setCurrentSong({
          ...currentSong,
          index: prevSong(currentSong.list, currentSong.index).index,
          src: prevSong(currentSong.list, currentSong.index).src
        }))
      }
    }
    window.addEventListener('keydown', prevSongKeyCode)

    return () => {
      window.removeEventListener('keydown', prevSongKeyCode)
    }
  }, [dispatch, currentSong, prevSong, isPlaying])

  return (
    <>
      <div className="audio">
        <div className="audio__wrapper">
          <p className="audio__wrapper__text">lofi.co 2022 ©</p>
          <div className="audio__wrapper__button">
            <Button
              onClick={() => {
                dispatch(setCurrentSong({
                  ...currentSong,
                  index: prevSong(currentSong.list, currentSong.index).index,
                  src: prevSong(currentSong.list, currentSong.index).src
                }))
              }}
            >
              <img src={prevIcon} alt="prev" />
            </Button>
            {!isPlaying ? (
              <Button className="play" onClick={handlePlay}>
                <img src={playIcon} alt="play" />
              </Button>
            ) : (
              <Button className="pause" onClick={handlePause}>
                <img src={pauseIcon} alt="pause" />
              </Button>
            )}
            <Button
              onClick={() => {
                dispatch(setCurrentSong({
                  ...currentSong,
                  index: nextSong(currentSong.list, currentSong.index).index,
                  src: nextSong(currentSong.list, currentSong.index).src
                }))
              }}
            >
              <img src={nextIcon} alt="next" />
            </Button>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={currentSong.src}
          preload='auto'
          autoPlay={isPlaying && true}
          onEnded={() => {
            dispatch(setCurrentSong({
              ...currentSong,
              index: nextSong(currentSong.list, currentSong.index).index,
              src: nextSong(currentSong.list, currentSong.index).src
            }))
          }}
        />
      </div>
      <div className="audio">
      {NOISES.map((item, index) => (
          <audio
            ref={el => (noisesRefs.current[index] = el)}
            key={index}
            src={item}
            autoPlay
            loop
          />
      ))}
      </div>
    </>
  )
}

export default Audio
