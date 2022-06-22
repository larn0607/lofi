import React from 'react'
import { useSelector } from 'react-redux'

const Background = () => {
  const background = useSelector(state => state.background.background)

  return (
    <div className="background">
      <div className={`background__${background.show ? 'in' : 'out'}`}>
        <video
          src={background.srcIn}
          autoPlay
          muted
          loop
          playsInline
          className="background__video"
        />
      </div>
      <div className={`background__${!background.show ? 'in' : 'out'}`}>
        <video
          src={background.srcOut}
          autoPlay
          muted
          loop
          playsInline
          className="background__video"
        />
      </div>
    </div>
  )
}

export default Background
