import React, { useState } from "react";

import { nextIcon, pauseIcon, playIcon, prevIcon } from "../assets/icons";
import {Button} from "./";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChange = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      <div className="audio">
        <div className="audio__wrapper">
          <p className="audio__wrapper__text">Music by - lofi.co 2021 ©</p>
          <div className="audio__wrapper__button">
            <Button>
              <img src={prevIcon} alt="prev" />
            </Button>
            {isPlaying ? (
              <Button className="pause" onClick={handleChange}>
                <img src={pauseIcon} alt="pause" />
              </Button>
            ) : (
              <Button className="play" onClick={handleChange}>
                <img src={playIcon} alt="play" />
              </Button>
            )}
            <Button>
              <img src={nextIcon} alt="next" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audio;
