import { useState, useContext } from 'react'

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
import {
  changeNoiseVolume,
  changeNoiseActive
} from '../../redux/slices/noisesSlice'

import { AudioContext } from '../../context/AudioProvider'

import {
  NOISE_ICONS,
  CHILL_MUSICS,
  JAZZY_MUSICS,
  SLEEPY_MUSICS
} from '../../constants/'
import { changeBackground } from '../../redux/slices/backgroundSlice'

const Mood = () => {
  const noisesRefs = useContext(AudioContext)
  const currentSong = useSelector(state => state.audio.currentSong)
  const background = useSelector(state => state.background.background)
  const volume = useSelector(state => state.audio.volumeValue)
  const noisesVolume = useSelector(state => state.noises.noisesValue)
  const isNoising = useSelector(state => state.noises.isNoising)
  const dispatch = useDispatch()

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
        <div className="mood__noises__title title">Background noises</div>
        <div className="mood__noises__items">
          {NOISE_ICONS.map((item, index) => (
            <div className="mood__noises__item" key={index}>
              <div className="mood__noises__item__label">{item.label}</div>
              <ReactSlider
                className={`mood__noises__item__slider`}
                defaultValue={0}
                value={noisesVolume[Object.keys(noisesVolume)[index]]}
                onBeforeChange={() => {
                  const thisAudio = noisesRefs.current[index]
                  if (thisAudio.paused) thisAudio.play()
                }}
                onChange={value => {
                  const noisesVolumeArr = Object.keys(noisesVolume)
                  const noisesActiveArr = Object.keys(isNoising)
                  dispatch(
                    changeNoiseVolume({
                      ...noisesVolume,
                      [noisesVolumeArr[index]]: value
                    })
                  )
                  dispatch(
                    changeNoiseActive({
                      ...isNoising,
                      [noisesActiveArr[index]]: value === 0 ? false : true
                    })
                  )
                  if(noisesRefs.current[index] === noisesRefs.current[14]) {
                    if(background.set === 'northern_light') {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            snow: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[14].volume) return

                        dispatch(
                          changeBackground({
                            snow: true
                          })
                        )
                      }
                    }
                  }
                  if (noisesRefs.current[index] === noisesRefs.current[1]) {
                    if (
                      !['chill_vibes', 'cafe', 'book_cafe'].includes(
                        background.set
                      )
                    )
                      return
                    else {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[1].volume) return

                        dispatch(
                          changeBackground({
                            rainy: true
                          })
                        )
                      }
                    }
                  }
                  if (noisesRefs.current[index] === noisesRefs.current[5]) {
                    if (
                      !['forest', 'van'].includes(
                        background.set
                      )
                    )
                      return
                    else {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[1].volume) return

                        dispatch(
                          changeBackground({
                            rainy: true
                          })
                        )
                      }
                    }
                  }
                  if (noisesRefs.current[index] === noisesRefs.current[8]) {
                    if (
                      !['ocean', 'summer'].includes(
                        background.set
                      )
                    )
                      return
                    else {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[1].volume) return

                        dispatch(
                          changeBackground({
                            rainy: true
                          })
                        )
                      }
                    }
                  }
                  noisesRefs.current[index].volume = value / 100
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

export default Mood
