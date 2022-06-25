import Popover from './Popover'

const styles = {
  scene1: {
    rainForest: {
      noiseName: 'rainForest',
      noiseValue: 'rainForestValue',
      label: 'Forest Rain',
      styles: {
        left: '20%',
        top: '45%'
      }
    },
    forestSound: {
      noiseName: 'forestSound',
      noiseValue: 'forestSoundValue',
      label: 'Forest Sound',
      styles: {
        left: '82%',
        top: '15%'
      }
    },
    river: {
      noiseName: 'river',
      noiseValue: 'riverValue',
      label: 'River',
      styles: {
        left: '72%',
        top: '43%'
      }
    }
  },
  scene2: {
    rainForest: {
      noiseName: 'rainForest',
      noiseValue: 'rainForestValue',
      label: 'Forest Rain',
      styles: {
        left: '40%',
        top: '25%'
      }
    },
    forestSound: {
      noiseName: 'forestSound',
      noiseValue: 'forestSoundValue',
      label: 'Forest Sound',
      styles: {
        left: '82%',
        top: '20%'
      }
    },
    river: {
      noiseName: 'river',
      noiseValue: 'riverValue',
      label: 'River',
      styles: {
        left: '68%',
        top: '85%'
      }
    }
  }
}

const Forest = ({ scene, handleActiveNoise }) => (
  <>
    {scene === 'scene1' && (
      <>
        <Popover
          style={styles.scene1.rainForest.styles}
          label={styles.scene1.rainForest.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.rainForest.noiseValue,
              styles.scene1.rainForest.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.forestSound.styles}
          label={styles.scene1.forestSound.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.forestSound.noiseValue,
              styles.scene1.forestSound.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.river.styles}
          label={styles.scene1.river.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.river.noiseValue,
              styles.scene1.river.noiseName
            )
          }
        />
      </>
    )}
    {scene === 'scene2' && (
      <>
        <Popover
          style={styles.scene2.rainForest.styles}
          label={styles.scene2.rainForest.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.rainForest.noiseValue,
              styles.scene2.rainForest.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.forestSound.styles}
          label={styles.scene2.forestSound.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.forestSound.noiseValue,
              styles.scene2.forestSound.noiseName
            )
          }
        />
        <Popover
          style={styles.scene2.river.styles}
          label={styles.scene2.river.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.river.noiseValue,
              styles.scene2.river.noiseName
            )
          }
        />
      </>
    )}
  </>
)

export default Forest
