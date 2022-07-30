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

  const handleActiveMood = useCallback(
    type => {
      let randomIndex
      if (mood[type]) return

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
        case 'holiday':
          setMood({ ...initialMood, holiday: true })
          randomIndex = Math.floor(Math.random() * HOLIDAY.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: HOLIDAY,
              index: randomIndex,
              src: HOLIDAY[randomIndex]
            })
          )
          break
        case 'romance':
          setMood({ ...initialMood, romance: true })
          randomIndex = Math.floor(Math.random() * ROMANCE.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: ROMANCE,
              index: randomIndex,
              src: ROMANCE[randomIndex]
            })
          )
          break
        case 'pop80s':
          setMood({ ...initialMood, pop80s: true })
          randomIndex = Math.floor(Math.random() * POP_80S.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: POP_80S,
              index: randomIndex,
              src: POP_80S[randomIndex]
            })
          )
          break
        case 'vux':
          setMood({ ...initialMood, vux: true })
          randomIndex = Math.floor(Math.random() * VUX_MUSIC.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: VUX_MUSIC,
              index: randomIndex,
              src: VUX_MUSIC[randomIndex]
            })
          )
          break
        case 'throughLove':
          setMood({ ...initialMood, throughLove: true })
          randomIndex = Math.floor(Math.random() * THROUGH_LOVE.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: THROUGH_LOVE,
              index: randomIndex,
              src: THROUGH_LOVE[randomIndex]
            })
          )
          break
        case 'ho20':
          setMood({ ...initialMood, ho20: true })
          randomIndex = Math.floor(Math.random() * HO20.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: HO20,
              index: randomIndex,
              src: HO20[randomIndex]
            })
          )
          break
        case 'ho22':
          setMood({ ...initialMood, ho22: true })
          randomIndex = Math.floor(Math.random() * HO22.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: HO22,
              index: randomIndex,
              src: HO22[randomIndex]
            })
          )
          break
        case 'ho23':
          setMood({ ...initialMood, ho23: true })
          randomIndex = Math.floor(Math.random() * HO23.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: HO23,
              index: randomIndex,
              src: HO23[randomIndex]
            })
          )
          break
        case 'ho24':
          setMood({ ...initialMood, ho24: true })
          randomIndex = Math.floor(Math.random() * HO24.length)
          dispatch(
            setCurrentSong({
              ...currentSong,
              list: HO24,
              index: randomIndex,
              src: HO24[randomIndex]
            })
          )
          break

        default:
          break
      }
      dispatch(setIsPlaying(true))
    },
    [currentSong, dispatch, initialMood, mood, setMood]
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
          <MusicItem
            label="Holiday"
            isActive={mood.holiday}
            handleClick={() => handleActiveMood('holiday')}
          />
          <MusicItem
            label="Romance"
            isActive={mood.romance}
            handleClick={() => handleActiveMood('romance')}
          />
          <MusicItem
            label="80s Japanese Night City Pop"
            isActive={mood.pop80s}
            handleClick={() => handleActiveMood('pop80s')}
          />
          <MusicItem
            label="Vux - My favorite playlist"
            isActive={mood.vux}
            handleClick={() => handleActiveMood('vux')}
          />
          <MusicItem
            label="HUYKOH - Through love"
            isActive={mood.throughLove}
            handleClick={() => handleActiveMood('throughLove')}
          />
          <MusicItem
            label="HUYKOH - 20"
            isActive={mood.ho20}
            handleClick={() => handleActiveMood('ho20')}
          />
          <MusicItem
            label="HUYKOH - 22"
            isActive={mood.ho22}
            handleClick={() => handleActiveMood('ho22')}
          />
          <MusicItem
            label="HUYKOH - 23"
            isActive={mood.ho23}
            handleClick={() => handleActiveMood('ho23')}
          />
          <MusicItem
            label="HUYKOH - 24"
            isActive={mood.ho24}
            handleClick={() => handleActiveMood('ho24')}
          />
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
