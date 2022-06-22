import { sunIcon, moonIcon } from "../../assets/icons"

const Switch = ({ isToggle, handleToggle }) => {

  return (
    <div onClick={handleToggle} className={`toggle${isToggle ? ' night' : ''}`}>
      <div className="circle"></div>
      <div className="icons">
        {
          isToggle ?
          <img src={moonIcon} alt="" />
          :
          <img src={sunIcon} alt="" />
        }
      </div>
    </div>
  )
}

export default Switch