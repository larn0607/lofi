import { phoneIcon } from '../assets/icons/'

const Overlay = () => (
  <div className="overlay">
    <img src={phoneIcon} alt="phone" />
    <p class="overlay__text">
      Visit <span>lofi.co</span> in portrait mode or open it from
      desktop for a better experience and to use our suite of productivity tools
    </p>
  </div>
)

export default Overlay
