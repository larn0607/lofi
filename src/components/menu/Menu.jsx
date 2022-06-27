import { useState } from 'react'

import {
  moodIcon,
  setIcon
  // focusIcon
} from '../../assets/icons'

import {
  Set,
  Mood
  // Focus
} from '../'

const Menu = () => {
  const initialTab = {
    mood: false,
    set: false
    // focus: false
  }
  const [menuTab, setMenuTab] = useState(initialTab)

  return (
    <>
      <div className={`menu${menuTab.mood || menuTab.set ? ' active' : ''}`}>
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
            className="bottom"
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
        {(menuTab.mood || menuTab.set) && (
          // || menuTab.focus
          <>
            <div
              className={`menu__tab ${
                menuTab.mood ? 'mood-menu' : menuTab.set ? 'set-menu' : null
                // : 'focus-menu'
              }`}
            >
              {menuTab.mood && <Mood />}
              {menuTab.set && <Set />}
              {/* {menuTab.focus && <Focus />} */}
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
