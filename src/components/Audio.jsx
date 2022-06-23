import React, { useEffect, useRef } from 'react'

import { nextIcon, pauseIcon, playIcon, prevIcon } from '../assets/icons'
import { Button } from './'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSong, setIsPlaying } from '../redux/slices/audioSlice'

const Audio = () => {
  const audioRef = useRef(null)
  const currentSong = useSelector(state => state.audio.currentSong)
  const volumeValue = useSelector(state => state.audio.volumeValue)
  const isPlaying = useSelector(state => state.audio.isPlaying)
  const dispatch = useDispatch()


  useEffect(() => {
    audioRef.current.volume = volumeValue
  }, [volumeValue])

  const handlePlay = () => {
    dispatch(setIsPlaying(true))
    if (audioRef.current.paused) audioRef.current.play()
  }

  const handlePause = () => {
    dispatch(setIsPlaying(false))
    if (!audioRef.current.paused) audioRef.current.pause()
  }

  const nextSong = (list, currentIndex) => {
    let newIndex
    if (currentIndex < 0 || currentIndex >= list.length - 1) {
      newIndex = 0
    } else {
      newIndex = currentIndex + 1
    }

    return { index: newIndex, src: list[newIndex] }
  }

  const prevSong = (list, currentIndex) => {
    let newIndex
    if (currentIndex <= 0 || currentIndex > list.length - 1) {
      newIndex = list.length - 1
    } else {
      newIndex = currentIndex - 1
    }
    return { index: newIndex, src: list[newIndex] }
  }

  return (
    <>
      <div className="audio">
        <div className="audio__wrapper">
          <p className="audio__wrapper__text">Music by - lofi.co 2021 ©</p>
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
              index: prevSong(currentSong.list, currentSong.index).index,
              src: prevSong(currentSong.list, currentSong.index).src
            }))
          }}
        />
      </div>
    </>
  )
}

export default Audio
