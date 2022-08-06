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
        left: '55%',
        top: '20%'
      }
    }
  },
  scene2: {
    campfire: {
      noiseName: 'campfire',
      noiseValue: 'campfireValue',
      label: 'Campfire',
      styles: {
        left: '42%',
        top: '78%'
      }
    },
    forestSound: {
      noiseName: 'forestSound',
      noiseValue: 'forestSoundValue',
      label: 'Forest Sound',
      styles: {
        left: '10%',
        top: '20%'
      }
    }
  }
}

const Van = ({ scene, handleActiveNoise }) => (
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
      </>
    )}
    {scene === 'scene2' && (
      <>
        <Popover
          style={styles.scene2.campfire.styles}
          label={styles.scene2.campfire.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.campfire.noiseValue,
              styles.scene2.campfire.noiseName
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
      </>
    )}
  </>
)

export default Van
