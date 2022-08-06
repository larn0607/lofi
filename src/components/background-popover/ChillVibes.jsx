import Popover from './Popover'

const styles = {
  scene1: {
    rainCity: {
      noiseName: 'rainCity',
      noiseValue: 'rainCityValue',
      label: 'City Rain',
      styles: {
        left: '82%',
        top: '20%'
      }
    },
    cityTraffic: {
      noiseName: 'cityTraffic',
      noiseValue: 'cityTrafficValue',
      label: 'City Traffic',
      styles: {
        left: '7%',
        top: '18%'
      }
    },
    keyboard: {
      noiseName: 'keyboard',
      noiseValue: 'keyboardValue',
      label: 'Keyboard',
      styles: {
        left: '45%',
        top: '45%'
      }
    }
  },
  scene2: {
    rainCity: {
      noiseName: 'rainCity',
      noiseValue: 'rainCityValue',
      label: 'City Rain',
      styles: {
        left: '40%',
        top: '14%'
      }
    },
    fireplace: {
      noiseName: 'fireplace',
      noiseValue: 'fireplaceValue',
      label: 'Fireplace',
      styles: {
        left: '4%',
        top: '68%'
      }
    }
  }
}

const ChillVibes = ({ scene, handleActiveNoise }) => (
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
            style={styles.scene1.keyboard.styles}
            label={styles.scene1.keyboard.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene1.keyboard.noiseValue,
                styles.scene1.keyboard.noiseName
              )
            }
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
            style={styles.scene2.fireplace.styles}
            label={styles.scene2.fireplace.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene2.fireplace.noiseValue,
                styles.scene2.fireplace.noiseName
              )
            }
          />
        </>
      )}
    </>
  )

export default ChillVibes
