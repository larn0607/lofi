// import ReactSlider from "react-slider"

const Popover = props => (
    <div className="popover" style={props.style}>
    <div className="popover__circle" onClick={props.onClick}>
      <div></div>
    </div>
    <div className="popover__card">
      <div className="popover__card__label">{props.label}</div>
      {/* {props.isActive && (
        <div className="popover__card__slider">
          <ReactSlider
            defaultValue={0}
            value={props.value}
            onChange={value => (
              props.onChange(props.isActive, props.volume, value)
            )}
            renderTrack={(props, state) => (
              <div
                {...props}
                className={`popover__card__slider__track${
                  state.index === 0 && state.value !== 0 ? ' valid' : ''
                }`}
                index={state.index}
              />
            )}
            renderThumb={(props) => (
              <div
                {...props}
                className={`popover__card__slider__thumb`}
              />
            )}
          />
        </div>
      )} */}
    </div>
  </div>
  )

export default Popover