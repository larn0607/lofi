import { useContext } from 'react'

import ReactSlider from 'react-slider'

import { NOISE_ICONS } from '../../constants/'

import { useSelector, useDispatch } from 'react-redux'
import { changeBackground } from '../../redux/slices/backgroundSlice'

import {
  changeNoiseVolume,
  changeNoiseActive
} from '../../redux/slices/noisesSlice'

import { AudioContext } from '../../context/AudioProvider'

const Noise = () => {
  const noisesRefs = useContext(AudioContext)
  console.log(noisesRefs)
  const background = useSelector(state => state.background.background)
  const noisesVolume = useSelector(state => state.noises.noisesValue)
  const isNoising = useSelector(state => state.noises.isNoising)
  const dispatch = useDispatch()

  return (
    <>
      <div className="noises">
        <div className="noises__title title">Background noises</div>
        <div className="noises__items">
          {NOISE_ICONS.map((item, index) => (
            <div className="noises__item" key={index}>
              <div className="noises__item__label">{item.label}</div>
              <ReactSlider
                className={`noises__item__slider`}
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
                  if (noisesRefs.current[index] === noisesRefs.current[14]) {
                    if (background.set === 'northern_light') {
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
                  if (noisesRefs.current[index] === noisesRefs.current[18]) {
                    if (background.set === 'train') {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[18].volume) return
                        dispatch(
                          changeBackground({
                            rainy: true
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
                    if (!['forest', 'van'].includes(background.set)) return
                    else {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[5].volume) return

                        dispatch(
                          changeBackground({
                            rainy: true
                          })
                        )
                      }
                    }
                  }
                  if (noisesRefs.current[index] === noisesRefs.current[8]) {
                    if (!['ocean', 'summer', 'honolulu'].includes(background.set)) return
                    else {
                      if (value === 0) {
                        dispatch(
                          changeBackground({
                            rainy: false
                          })
                        )
                      } else {
                        if (noisesRefs.current[8].volume) return

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
                    className={`noises__item__slider__track${
                      state.index === 0 && state.value !== 0 ? ' valid' : ''
                    }`}
                    index={state.index}
                  />
                )}
                renderThumb={(props, state) => (
                  <div
                    {...props}
                    className={`noises__item__slider__thumb${
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
    </>
  )
}

export default Noise
