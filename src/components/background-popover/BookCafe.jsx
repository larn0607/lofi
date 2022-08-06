import Popover from './Popover'

const styles = {
  scene1: {
    rainCity: {
      noiseName: 'rainCity',
      noiseValue: 'rainCityValue',
      label: 'City Rain',
      styles: {
        left: '6%',
        top: '40%'
      }
    },
    cityTraffic: {
      noiseName: 'cityTraffic',
      noiseValue: 'cityTrafficValue',
      label: 'City Traffic',
      styles: {
        left: '30%',
        top: '65%'
      }
    },
    enter: {
      label: 'Enter',
      styles: {
        left: '60%',
        top: '60%'
      }
    }
  },
  scene2: {
    rainCity: {
      noiseName: 'rainCity',
      noiseValue: 'rainCityValue',
      label: 'City Rain',
      styles: {
        left: '17%',
        top: '20%'
      }
    },
    keyboard: {
      noiseName: 'keyboard',
      noiseValue: 'keyboardValue',
      label: 'Keyboard',
      styles: {
        left: '84%',
        top: '72%'
      }
    }
  }
}
const BookCafe = ({ scene, handleActiveNoise, handleChangeScence }) => (
  <>
    {scene === 'scene1' && (
      <>
        <Popover
          style={styles.scene1.rainCity.styles}
          label={styles.scene1.rainCity.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.rainCity.noiseValue,
              styles.scene1.rainCity.noiseName
            )
          }
          // isActive={isNosing.rainCity}
          // volume={isNosing.rainCityValue}
          // value={noisesValue.rainCityValue}
          // onChange={handleChangeVolume}
        />
        <Popover
          style={styles.scene1.cityTraffic.styles}
          label={styles.scene1.cityTraffic.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.cityTraffic.noiseValue,
              styles.scene1.cityTraffic.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.enter.styles}
          label={styles.scene1.enter.label}
          onClick={handleChangeScence}
        />
      </>
    )}
    {scene === 'scene2' && (
      <>
        <Popover
          style={styles.scene2.rainCity.styles}
          label={styles.scene2.rainCity.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.rainCity.noiseValue,
              styles.scene2.rainCity.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.keyboard.styles}
          label={styles.scene2.keyboard.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.keyboard.noiseValue,
              styles.scene2.keyboard.noiseName
            )
          }
        />
      </>
    )}
  </>
)

export default BookCafe
