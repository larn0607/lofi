import { memo, useCallback } from 'react'

import ReactSlider from 'react-slider'

import {
  sleepyIcon,
  jazzyIcon,
  chillIcon,
  volumeMinIcon,
  volumeMaxIcon
} from '../../assets/icons'

import { useSelector, useDispatch } from 'react-redux'
import {
  setCurrentSong,
  changeVolume,
  setIsPlaying
} from '../../redux/slices/audioSlice'

import {
  CHILL_MUSICS,
  JAZZY_MUSICS,
  SLEEPY_MUSICS,
  HOLIDAY,
  POP_80S,
  ROMANCE,
  VUX_MUSIC,
  THROUGH_LOVE,
  HO20,
  HO22,
  HO23,
  HO24
} from '../../constants/'

const Mood = ({ initialMood, setMood, mood }) => {
  const currentSong = useSelector(state => state.audio.currentSong)
  const volume = useSelector(state => state.audio.volumeValue)
  const dispatch = useDispatch()

  const musicItems = [
    // {
    //   label: 'Holiday',
    //   isActive: mood.holiday,
    //   type: 'holiday'
    // },
    {
      label: 'Romance',
      isActive: mood.romance,
      type: 'romance'
    },
    {
      label: '80s Japanese Night City Pop',
      isActive: mood.pop80s,
      type: 'pop80s'
    },
    {
      label: 'Vux - My favorite playlist',
      isActive: mood.vux,
      type: 'vux'
    },
    {
      label: 'HUYKOH - Through love',
      isActive: mood.throughLove,
      type: 'throughLove'
    },
    {
      label: 'HUYKOH - 20',
      isActive: mood.ho20,
      type: 'ho20'
    },
    {
      label: 'HUYKOH - 22',
      isActive: mood.ho22,
      type: 'ho22'
    },
    {
      label: 'HUYKOH - 23',
      isActive: mood.ho23,
      type: 'ho23'
    },
    {
      label: 'HUYKOH - 24',
      isActive: mood.ho24,
      type: 'ho24'
    }
  ]

  const activeMood = useCallback((type, typeMusic) => {
    setMood({...initialMood, [type]: true})
    let randomIndex = Math.floor(Math.random() * typeMusic.length)
    dispatch(setCurrentSong({
      ...currentSong,
      list: typeMusic,
      index: randomIndex,
      src: typeMusic[randomIndex]
    }))
  }, [dispatch, currentSong, setMood, initialMood])

  const handleActiveMood = useCallback(
    type => {
      if (mood[type]) return
      switch (type) {
        case 'sleepy':
          activeMood("sleepy", SLEEPY_MUSICS)
          break
        case 'jazzy':
          activeMood("jazzy", JAZZY_MUSICS)
          break
        case 'chill':
          activeMood("chill", CHILL_MUSICS)
          break
        case 'holiday':
          activeMood("holiday", HOLIDAY)
          break
        case 'romance':
          activeMood("romance", ROMANCE)
          break
        case 'pop80s':
          activeMood("pop80s", POP_80S)
          break
        case 'vux':
          activeMood("vux", VUX_MUSIC)
          break
        case 'throughLove':
          activeMood("throughLove", THROUGH_LOVE)
          break
        case 'ho20':
          activeMood("ho20", HO20)
          break
        case 'ho22':
          activeMood("ho22", HO22)
          break
        case 'ho23':
          activeMood("ho23", HO23)
          break
        case 'ho24':
          activeMood("ho24", HO24)
          break
        default:
          break
      }
      dispatch(setIsPlaying(true))
    },
    [dispatch, activeMood, mood]
  )

  const handleChangeVolume = useCallback(
    value => {
      dispatch(changeVolume(value / 100))
    },
    [dispatch]
  )
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
      <div className="music">
        <div className="music__title title">Music for today</div>
        <div className="music__items">
          {musicItems.map((el, i) => (
            <MusicItem
              key={i}
              label={el.label}
              isActive={el.isActive}
              handleClick={() => handleActiveMood(el.type)}
            />
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

const MusicItem = props => (
  <div className="music__item" onClick={props.handleClick}>
    <div className={`music__item__label${props.isActive ? ' active' : ''}`}>
      {props.label}
    </div>
  </div>
)

export default memo(Mood)
