import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { SETS } from '../../constants/'

import { Button } from '../'

import { arrowLeftIcon } from '../../assets/icons'
import { changeBackground } from '../../redux/slices/backgroundSlice'

const Set = () => {
  const background = useSelector(state => state.background.background)
  const dispatch = useDispatch()

  const [setMode, setSetMode] = useState()

  const handleChangeBackground = item => {
    dispatch(
      changeBackground({
        set: setMode,
        scene: item.scene,
        day: background.set === setMode ? background.day : true,
        rainy: background.set === setMode ? background.rainy : false,
        snow: background.set === setMode ? background.snow : false,
        pixel: background.set === setMode ? background.pixel : false,
        fire: background.set === setMode ? background.fire : false,
      })
      )
  }

  return (
    <div className="set">
      {!setMode ? (
        <>
          <div className="set__title title">Change Set</div>
          <div className="set__items">
            {SETS.map(item => (
              <div
                className={`set__item${background.set === item.set ? ' active' : ''}`}
                onClick={() => setSetMode(item.set)}
                key={item.set}
              >
                <img src={item.img} alt="set" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="set__scene">
          <div className="set__scene__top">
            <Button onClick={() => setSetMode(null)}>
              <img src={arrowLeftIcon} alt="back" />
            </Button>
            <p className="title">Switch scene</p>
            <div />
          </div>
          <div className="set__scene__items">
            {SETS.find(item => item.set === setMode).scenes.map(item => (
              <div
                key={item.scene}
                className={`set__scene__item${
                  background.set === setMode && item.scene === background.scene
                    ? ' active'
                    : ''
                }`}
                // onClick={() => setSetMode(item.set)}
                onClick={() => handleChangeBackground(item)}
              >
                <img src={item.img} alt="scene" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Set
