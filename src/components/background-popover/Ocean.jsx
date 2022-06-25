import Popover from './Popover'

const styles = {
  scene1: {
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '45%',
        top: '65%'
      }
    },
    wind: {
      noiseName: 'wind',
      noiseValue: 'windValue',
      label: 'Wind',
      styles: {
        left: '20%',
        top: '50%'
      }
    },
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Ocean Rain',
      styles: {
        left: '67%',
        top: '23%'
      }
    }
  },
  scene2: {
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Ocean Rain',
      styles: {
        left: '40%',
        top: '25%'
      }
    },
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '60%',
        top: '86%'
      }
    },
    birds: {
      noiseName: 'birds',
      noiseValue: 'birdsValue',
      label: 'Birds',
      styles: {
        left: '80%',
        top: '20%'
      }
    }
  }
}

const Ocean = ({ scene, handleActiveNoise }) => (
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
        <Popover
          style={styles.scene1.summerStorm.styles}
          label={styles.scene1.summerStorm.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.summerStorm.noiseValue,
              styles.scene1.summerStorm.noiseName
            )
          }
        />
      </>
    )}
    {scene === 'scene2' && (
      <>
        <Popover
          style={styles.scene2.summerStorm.styles}
          label={styles.scene2.summerStorm.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.summerStorm.noiseValue,
              styles.scene2.summerStorm.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.birds.styles}
          label={styles.scene2.birds.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.birds.noiseValue,
              styles.scene2.birds.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.ocean.styles}
          label={styles.scene2.ocean.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.ocean.noiseValue,
              styles.scene2.ocean.noiseName
            )
          }
        />
      </>
    )}
  </>
)

export default Ocean
