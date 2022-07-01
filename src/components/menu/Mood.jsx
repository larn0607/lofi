import { memo, useCallback } from 'react'

import ReactSlider from 'react-slider'

import {
  sleepyIcon,
  jazzyIcon,
  chillIcon,
  volumeMinIcon,
  volumeMaxIcon,
  // pauseMusicIcon,
  // playMusicIcon
} from '../../assets/icons'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSong, changeVolume, setIsPlaying } from '../../redux/slices/audioSlice'

import {
  CHILL_MUSICS,
  JAZZY_MUSICS,
  SLEEPY_MUSICS,
  // HOLIDAY
} from '../../constants/'

const Mood = ({ initialMood, setMood, mood }) => {
  const currentSong = useSelector(state => state.audio.currentSong)
  const volume = useSelector(state => state.audio.volumeValue)
  const dispatch = useDispatch()

  const handleActiveMood = useCallback(type => {
    let randomIndex
    if(mood[type]) return

    switch (type) {
      case 'sleepy':
        setMood({ ...initialMood, sleepy: true })
        randomIndex = Math.floor(Math.random() * SLEEPY_MUSICS.length)
        dispatch(
          setCurrentSong({
            ...currentSong,
            list: SLEEPY_MUSICS,
            index: randomIndex,
            src: SLEEPY_MUSICS[randomIndex]
          })
        )
        break
      case 'jazzy':
        setMood({ ...initialMood, jazzy: true })
        randomIndex = Math.floor(Math.random() * JAZZY_MUSICS.length)
        dispatch(
          setCurrentSong({
            ...currentSong,
            list: JAZZY_MUSICS,
            index: randomIndex,
            src: JAZZY_MUSICS[randomIndex]
          })
        )
        break
      case 'chill':
        setMood({ ...initialMood, chill: true })
        randomIndex = Math.floor(Math.random() * CHILL_MUSICS.length)
        dispatch(
          setCurrentSong({
            ...currentSong,
            list: CHILL_MUSICS,
            index: randomIndex,
            src: CHILL_MUSICS[randomIndex]
          })
        )
        break
      // case 'holiday':
      //   setMood({ ...initialMood, holiday: true })
      //   randomIndex = Math.floor(Math.random() * HOLIDAY.length)
      //   dispatch(
      //     setCurrentSong({
      //       ...currentSong,
      //       list: HOLIDAY,
      //       index: randomIndex,
      //       src: HOLIDAY[randomIndex]
      //     })
      //   )
      //   break
      default:
        break
    }
    dispatch(setIsPlaying(true))
  }, [currentSong, dispatch, initialMood, mood, setMood])

  const handleChangeVolume = useCallback(value => {
    dispatch(changeVolume(value / 100))
  }, [dispatch])
  return (
    <div className="mood">
      <div className="mood__title title">Mood</div>

      <div className="mood__items">
        <MoodItem
          isActive={mood.sleepy}
          icon={sleepyIcon}
          label="Sleepy"
          handleClick={() => handleActiveMood('sleepy')}
        />
        <MoodItem
          isActive={mood.jazzy}
          icon={jazzyIcon}
          label="Jazzy"
          handleClick={() => handleActiveMood('jazzy')}
        />
        <MoodItem
          isActive={mood.chill}
          icon={chillIcon}
          label="Chill"
          handleClick={() => handleActiveMood('chill')}
        />
      </div>
      <div className="mood__volume">
        <div className="mood__volume__icon">
          <img src={volumeMinIcon} alt="" />
        </div>
        <ReactSlider
          className="mood__volume__slider"
          defaultValue={volume * 100}
          onChange={value => handleChangeVolume(value)}
          renderTrack={(props, state) => (
            <div
              {...props}
              className={`mood__volume__slider__track${
                state.index === 0 ? ' valid' : ''
              }`}
              index={state.index}
            />
          )}
          renderThumb={props => (
            <div {...props} className="mood__volume__slider__thumb" />
          )}
        />
        <div className="mood__volume__icon">
          <img src={volumeMaxIcon} alt="" />
        </div>
      </div>
      {/* <div className="music">
        <div className="music__title title">Other Music Tracks</div>
        <div className="music__items">
          <MusicItem
            label="Holiday"
            isActive={mood.holiday}
            playMusicIcon={playMusicIcon}
            pauseMusicIcon={pauseMusicIcon} 
            handleClick={() => handleActiveMood('holiday')}
          />
        </div>
      </div> */}
    </div>
  )
}

const MoodItem = props => (
  <div className={`mood__item`} onClick={props.handleClick}>
    <div className={`mood__item__icon`}>
      <img
        src={props.icon}
        alt=""
        className={`${props.isActive ? 'active' : ''}`}
      />
    </div>
    <div className={`mood__item__label${props.isActive ? ' active' : ''}`}>
      {props.label}
    </div>
  </div>
)

// const MusicItem = props => (
//   <div className="music__item" onClick={props.handleClick}>
//     <div className={`music__item__label${props.isActive ? ' active' : ''}`}>
//       {props.label}
//     </div>
//   </div>
// )

export default memo(Mood)
