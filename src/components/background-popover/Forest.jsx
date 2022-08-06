import Popover from './Popover'

const styles = {
  scene1: {
    rainForest: {
      noiseName: 'rainForest',
      noiseValue: 'rainForestValue',
      label: 'Forest Rain',
      styles: {
        left: '70%',
        top: '30%'
      }
    },
    birds: {
      noiseName: 'birds',
      noiseValue: 'birdsValue',
      label: 'Birds',
      styles: {
        left: '15%',
        top: '20%'
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
    birds: {
      noiseName: 'birds',
      noiseValue: 'birdsValue',
      label: 'Birds',
      styles: {
        left: '10%',
        top: '50%'
      }
    },
    rainForest: {
      noiseName: 'rainForest',
      noiseValue: 'rainForestValue',
      label: 'Forest Rain',
      styles: {
        left: '67%',
        top: '12%'
      }
    },
    river: {
      noiseName: 'river',
      noiseValue: 'riverValue',
      label: 'River',
      styles: {
        left: '70%',
        top: '70%'
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
          style={styles.scene1.birds.styles}
          label={styles.scene1.birds.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.birds.noiseValue,
              styles.scene1.birds.noiseName
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
