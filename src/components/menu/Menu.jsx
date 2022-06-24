import { useState, useRef } from 'react'

import Set from './Set'

import { moodIcon, setIcon, focusIcon } from '../../assets/icons'
import Mood from './Mood'
import Focus from './Focus'

import { useSelector } from 'react-redux'

import { NOISES } from '../../constants/'

const Menu = () => {
  const initialTab = {
    mood: false,
    set: false,
    focus: false
  }
  const noisesRef = useRef([])
  const [menuTab, setMenuTab] = useState(initialTab)
  const { isNoising } = useSelector(state => state.noises)

  return (
    <>
      {NOISES.map((item, index) => (
          <audio
            ref={el => (noisesRef.current[index] = el)}
            key={index}
            src={item}
            autoPlay
            loop
            muted
          />
      ))}
      <div
        className={`menu${
          menuTab.mood || menuTab.set || menuTab.focus ? ' active' : ''
        }`}
      >
        <div className="menu__items">
          <MenuItem
            className="top"
            iconSrc={moodIcon}
            isActive={menuTab.mood}
            handleActive={() =>
              menuTab.mood
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, mood: true })
            }
          />
          <MenuItem
            iconSrc={setIcon}
            isActive={menuTab.set}
            handleActive={() =>
              menuTab.set
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, set: true })
            }
          />
          <MenuItem
            className="bottom"
            iconSrc={focusIcon}
            isActive={menuTab.focus}
            handleActive={() =>
              menuTab.focus
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, focus: true })
            }
          />
        </div>
        {(menuTab.mood || menuTab.set || menuTab.focus) && (
          <>
            <div
              className={`menu__tab ${
                menuTab.mood
                  ? 'mood-menu'
                  : menuTab.set
                  ? 'set-menu'
                  : 'focus-menu'
              }`}
            >
              {menuTab.mood && <Mood noisesRef={noisesRef} />}
              {menuTab.set && <Set />}
              {menuTab.focus && <Focus />}
            </div>
          </>
        )}
      </div>
      <div className="tab-close" onClick={() => setMenuTab(initialTab)}></div>
    </>
  )
}

const MenuItem = ({ className, iconSrc, handleActive, isActive }) => {
  return (
    <>
      <div
        className={`menu__item${className ? ` ${className}` : ''}${
          isActive ? ' active' : ''
        }`}
        onClick={handleActive}
      >
        <div className={`menu__item__icon`}>
          <img src={iconSrc} alt="icon" />
        </div>
        {className !== 'bottom' && !isActive && <div className="divisor"></div>}
      </div>
    </>
  )
}

export default Menu
