import { useState } from 'react'

import Set from './Set'

import { moodIcon, templateIcon, setIcon, focusIcon } from '../../assets/icons'

const Menu = () => {
  const initialTab = {
    mood: false,
    template: false,
    set: false,
    focus: false
  }
  const [menuTab, setMenuTab] = useState(initialTab)

  return (
    <>
      <div
        className={`menu${
          menuTab.mood || menuTab.template || menuTab.set || menuTab.focus
            ? ' active'
            : ''
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
            iconSrc={templateIcon}
            isActive={menuTab.template}
            handleActive={() =>
              menuTab.template
                ? setMenuTab(initialTab)
                : setMenuTab({ ...initialTab, template: true })
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
        {(menuTab.mood || menuTab.template || menuTab.set || menuTab.focus) && (
          <>
            <div
              className={`menu__tab ${
                menuTab.mood
                  ? 'mood-menu'
                  : menuTab.template
                  ? 'template-menu'
                  : menuTab.set
                  ? 'set-menu'
                  : 'focus-menu'
              }`}
            >
              {menuTab.set && <Set />}
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
