import { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  changeBackground,
  changeSnowBackground,
  changeCampfireBackground
} from '../../redux/slices/backgroundSlice'
import {
  changeNoiseActive,
  changeNoiseVolume
} from '../../redux/slices/noisesSlice'

import { AudioContext } from '../../context/AudioProvider'

import {
  BookCafe,
  ChillVibes,
  NorthernLight,
  LofiDesk,
  Forest,
  Cafe,
  Van,
  Summer,
  Ocean
} from '../'

const BackgroundPopover = () => {
  const background = useSelector(state => state.background.background)

  const { noisesValue, isNoising } = useSelector(state => state.noises)
  const noisesRefs = useContext(AudioContext)
  const dispatch = useDispatch()

  const handleActiveNoise = (volume, type) => {
    const arr = Object.keys(isNoising)
    dispatch(
      changeNoiseVolume({
        ...noisesValue,
        [volume]: !isNoising[type] ? 50 : 0
      })
    )
    dispatch(
      changeNoiseActive({
        ...isNoising,
        [type]: !isNoising[type] ? true : false
      })
    )
    if (
      type === 'rainCity' ||
      type === 'summerStorm' ||
      type === 'rainForest'
    ) {
      dispatch(
        changeBackground({
          rainy: !background.rainy
        })
      )
    }
    if (type === 'snow') {
      dispatch(
        changeSnowBackground({
          snow: !background.snow
        })
      )
    }
    if (type === 'campfire') {
      dispatch(
        changeCampfireBackground({
          fire: !background.fire
        })
      )
    }
    if (!isNoising[type]) {
      noisesRefs.current[arr.indexOf(type)].play()
    }
  }

  const handleChangeScence = () => {
    dispatch(
      changeBackground({
        scene: background.scene === 'scene1' ? 'scene2' : 'scene1'
      })
    )
  }

  return (
    <div className="background-popover">
      {background.set === 'book_cafe' && (
        <>
          <BookCafe
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
            handleChangeScence={handleChangeScence}
          />
        </>
      )}
      {background.set === 'chill_vibes' && (
        <>
          <ChillVibes
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
      {background.set === 'northern_light' && (
        <>
          <NorthernLight
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
      {background.set === 'lofi_desk' && (
        <>
          <LofiDesk
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
      {background.set === 'forest' && (
        <>
          <Forest
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
      {background.set === 'cafe' && (
        <>
          <Cafe
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
            handleChangeScence={handleChangeScence}
          />
        </>
      )}
      {background.set === 'van' && (
        <>
          <Van scene={background.scene} handleActiveNoise={handleActiveNoise} />
        </>
      )}
      {background.set === 'ocean' && (
        <>
          <Ocean
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
      {background.set === 'summer' && (
        <>
          <Summer
            scene={background.scene}
            handleActiveNoise={handleActiveNoise}
          />
        </>
      )}
    </div>
  )
}

export default BackgroundPopover
