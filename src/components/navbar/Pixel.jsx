import { useState } from 'react'
import { pixel, pixelHover } from '../../assets/icons'

const Pixel = ({onClick}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="pixel"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      <img
        src={hover ? pixelHover : pixel}
        alt="pixel"
        width={35}
        height={35}
      />
    </div>
  )
}

export default Pixel
