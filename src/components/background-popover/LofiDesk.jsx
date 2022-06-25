import Popover from './Popover'

const styles = {
  scene1: {
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '40%',
        top: '25%'
      }
    },
    wind: {
      noiseName: 'wind',
      noiseValue: 'windValue',
      label: 'Wind',
      styles: {
        left: '12%',
        top: '45%'
      }
    }
  },
  scene2: {
    cityTraffic: {
      noiseName: 'cityTraffic',
      noiseValue: 'cityTrafficValue',
      label: 'City Traffic',
      styles: {
        left: '22%',
        top: '25%'
      }
    },
    wind: {
      noiseName: 'wind',
      noiseValue: 'windValue',
      label: 'Wind',
      styles: {
        left: '12%',
        top: '45%'
      }
    }
  },
  scene3: {
    snow: {
      noiseName: 'snow',
      noiseValue: 'snowValue',
      label: 'Blizzard',
      styles: {
        left: '42%',
        top: '25%'
      }
    }
  }
}

const LofiDesk = ({ scene, handleActiveNoise }) => (
  <>
    {scene === 'scene1' && (
      <>
        <Popover
          style={styles.scene1.ocean.styles}
          label={styles.scene1.ocean.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.ocean.noiseValue,
              styles.scene1.ocean.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.wind.styles}
          label={styles.scene1.wind.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.wind.noiseValue,
              styles.scene1.wind.noiseName
            )
          }
        />
      </>
    )}
    {scene === 'scene2' && (
      <>
        <Popover
          style={styles.scene2.cityTraffic.styles}
          label={styles.scene2.cityTraffic.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.cityTraffic.noiseValue,
              styles.scene2.cityTraffic.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.wind.styles}
          label={styles.scene2.wind.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.wind.noiseValue,
              styles.scene2.wind.noiseName
            )
          }
        />
      </>
    )}
    {scene === 'scene3' && (
      <>
        <Popover
          style={styles.scene3.snow.styles}
          label={styles.scene3.snow.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene3.snow.noiseValue,
              styles.scene3.snow.noiseName
            )
          }
        />
      </>
    )}
  </>
)

export default LofiDesk