import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { changeBackground } from '../../redux/slices/backgroundSlice'
import { changeNoiseActive,changeNoiseVolume } from '../../redux/slices/noisesSlice'

import Popover from './Popover'

const BookCafe = ({ set, scene }) => {
  const {noisesValue, isNoising} = useSelector(state => state.noises)
  // console.log(noisesValue, isNoising)
  const background = useSelector(state => state.background.background)
  const dispatch = useDispatch()

  const handleActiveNoise = (volume, type) => {
    // if(!isNoising[type]) {
    //   dispatch(
    //     changeNoiseVolume({
    //       ...noisesValue,
    //       [volume]: 50
    //     })
    //   )
    //   dispatch(
    //     changeNoiseActive({
    //       ...isNoising,
    //       [type]: true
    //     })
    //   )
    // }
    // else {
    //   dispatch(
    //     changeNoiseVolume({
    //       ...noisesValue,
    //       [volume]: 0
    //     })
    //   )
    //   dispatch(
    //     changeNoiseActive({
    //       ...isNoising,
    //       [type]: false
    //     })
    //   )
    // }

    // dispatch(changeBackground({
    //   rainy: !background.rainy
    // }))
  }

  // const handleChangeVolume = (acitve, volume, value) => {
  //   if(value === 0) {
  //     dispatch(changeNoiseActive({
  //       ...isNosing,
  //       [acitve] : false
  //     }))
  //   }
  //   else {
  //     dispatch(changeNoiseActive({
  //       ...isNosing,
  //       [acitve] : true
  //     }))
  //   }
  //   dispatch(changeNoiseVolume({
  //     ...noisesValue,
  //     [volume] : value
  //   }))
  // }

  const styles = {
    scene1: {
      rainCity: {
        left: '6%',
        top: '40%'
      },
      cityTraffic: {
        left: '30%',
        top: '65%'
      },
      enter: {
        left: '60%',
        top: '60%'
      }
    }
  }

  return (
    <>
      {scene === 'scene1' && (
        <>
          <Popover
            style={styles.scene1.rainCity}
            label="City Rain"
            onClick={() => handleActiveNoise('rainCityValue','rainCity')}
            // isActive={isNosing.rainCity}
            // volume={isNosing.rainCityValue}
            // value={noisesValue.rainCityValue}
            // onChange={handleChangeVolume}
          />
        </>
      )}
    </>
  )
}

export default BookCafe
