import { useState, useEffect, useRef } from 'react'

import ReactSlider from 'react-slider'

import {
  sleepyIcon,
  jazzyIcon,
  chillIcon,
  volumeMinIcon,
  volumeMaxIcon
} from '../../assets/icons'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSong, changeVolume } from '../../redux/slices/audioSlice'
import { changeNoiseVolume } from '../../redux/slices/noisesSlice'
import {
  NOISE_ICONS,
  CHILL_MUSICS,
  JAZZY_MUSICS,
  SLEEPY_MUSICS,
  NOISES
} from '../../constants/'

const Mood = () => {
  const currentSong = useSelector(state => state.audio.currentSong)
  const volume = useSelector(state => state.audio.volumeValue)
  const noisesVolume = useSelector(state => state.noises.noises)
  const dispatch = useDispatch()

  const noisesRef = useRef([])
  const { current: noises } = noisesRef

  const initialMood = {
    sleepy: false,
    jazzy: false,
    chill: false
  }

  const [mood, setMood] = useState({
    ...initialMood,
    chill: true
  })

  const handleActiveMood = type => {
    let randomIndex

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
      default:
        break
    }
  }

  useEffect(() => {
    noises.forEach((item) => {
      item.volume = 0;
    })
  }, [noises])

  const handleChangeVolume = value => {
    dispatch(changeVolume(value / 100))
  }
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

      <div className="mood__noises">
      <div className="mood__noises__audio">
          {NOISES.map((item, index) => (
            <audio
              ref={el => noisesRef.current[index] = el}
              key={index}
              src={item}
              autoPlay
              loop
            />
          ))}
        </div>
        <div className="mood__noises__title title">Background noises</div>
        <div className="mood__noises__items">
          {NOISE_ICONS.map((item, index) => (
            <div className="mood__noises__item" key={index}>
              <div className="mood__noises__item__label">{item.label}</div>
              <ReactSlider
                className={`mood__noises__item__slider`}
                defaultValue={0}
                // onChange={value => {
                //   handleChangeVolume(value)
                // }}
                onChange={value => {
                  const allEl = Object.keys(noisesVolume)
                  dispatch(changeNoiseVolume({
                    ...noisesVolume,
                    [allEl[index]] : value
                  }))
                  noises[index].volume = value / 100;
                }}
                renderTrack={(props, state) => (
                  <div
                    {...props}
                    className={`mood__noises__item__slider__track${
                      state.index === 0 && state.value !== 0 ? ' valid' : ''
                    }`}
                    index={state.index}
                  />
                )}
                renderThumb={(props, state) => (
                  <div
                    {...props}
                    className={`mood__noises__item__slider__thumb${
                      state.value !== 0 ? '' : ' active'
                    }`}
                  >
                    <img src={item.icon} alt="" />
                  </div>
                )}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

const MoodItem = props => (
  <div className={`mood__item`} onClick={props.handleClick}>
    <div className={`mood__item__icon`}>
      <img src={props.icon} alt="" className={`${props.isActive ? 'active' : ''}`} />
    </div>
    <div className={`mood__item__label${props.isActive ? ' active' : ''}`}>{props.label}</div>
  </div>
)

export default Mood
