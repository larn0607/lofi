import { useState } from 'react'

import { moodIcon, setIcon, templateIcon } from '../../assets/icons'

import {
  Set,
  Mood,
  Noise
  // Focus
} from '../'

const Menu = () => {
  const initialTab = {
    mood: false,
    set: false,
    noise: false
    // focus: false
  }

  const initialMood = {
    sleepy: false,
    jazzy: false,
    chill: false,
  }
  const [menuTab, setMenuTab] = useState(initialTab)

  const [mood, setMood] = useState({
    ...initialMood,
    chill: true
  })

  return (
    <>
      <div
        className={`menu${
          menuTab.mood || menuTab.set || menuTab.noise ? ' active' : ''
        }`}
      >
        <div className={`menu__items${menuTab.mood ? ' top' : ''}${menuTab.set ? ' bottom' : ''}`}>
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
            // className="top"
            iconSrc={templateIcon}
            isActive={menuTab.noise}
            handleActive={() =>
              menuTab.noise
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, noise: true })
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
          {/* <MenuItem
              className="bottom"
            iconSrc={focusIcon}
            isActive={menuTab.focus}
            handleActive={() =>
              menuTab.focus
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, focus: true })
            }
          /> */}
        </div>
        {(menuTab.mood || menuTab.set || menuTab.noise) && (
          <>
            <div
              className={`menu__tab ${
                menuTab.mood
                  ? 'mood-menu'
                  : menuTab.set
                  ? 'set-menu'
                  : 'noise-menu'
              }`}
            >
              {menuTab.mood && (
                <Mood initialMood={initialMood} mood={mood} setMood={setMood} />
              )}
              {menuTab.set && <Set />}
              {menuTab.noise && <Noise />}
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
      </div>
    </>
  )
}

export default Menu
