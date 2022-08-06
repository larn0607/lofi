import Popover from './Popover'

const styles = {
  scene1: {
    wind: {
      noiseName: 'wind',
      noiseValue: 'windValue',
      label: 'Wind',
      styles: {
        left: '8%',
        top: '59%'
      }
    },
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Ocean Rain',
      styles: {
        left: '59%',
        top: '31%'
      }
    }
  },
  scene2: {
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Ocean Rain',
      styles: {
        left: '48%',
        top: '13%'
      }
    },
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '42%',
        top: '64%'
      }
    },
    wind: {
      noiseName: 'wind',
      noiseValue: 'windValue',
      label: 'Wind',
      styles: {
        left: '8%',
        top: '15%'
      }
    },
  }
}

const Ocean = ({ scene, handleActiveNoise }) => (
  <>
    {scene === 'scene1' && (
      <>
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
          style={styles.scene2.wind.styles}
          label={styles.scene2.wind.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.wind.noiseValue,
              styles.scene2.wind.noiseName
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
