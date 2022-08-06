import Popover from './Popover'

const styles = {
  scene1: {
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '40%',
        top: '15%'
      }
    },
    nextScene: {
      label: 'Change scene',
      styles: {
        left: '44%',
        top: '52.5%'
      }
    }
  },
  scene2: {
    cityTraffic: {
      noiseName: 'cityTraffic',
      noiseValue: 'cityTrafficValue',
      label: 'City Traffic',
      styles: {
        left: '40%',
        top: '15%'
      }
    },
    nextScene: {
      label: 'Change scene',
      styles: {
        left: '44%',
        top: '52.5%'
      }
    }
  },
  scene3: {
    snow: {
      noiseName: 'snow',
      noiseValue: 'snowValue',
      label: 'Blizzard',
      styles: {
        left: '40%',
        top: '15%'
      }
    },
    nextScene: {
      label: 'Change scene',
      styles: {
        left: '44%',
        top: '52.5%'
      }
    }
  }
}

const LofiDesk = ({ scene, handleActiveNoise, handleChangeScence }) => (
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
          style={styles.scene1.nextScene.styles}
          label={styles.scene1.nextScene.label}
          onClick={handleChangeScence}
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
          style={styles.scene2.nextScene.styles}
          label={styles.scene2.nextScene.label}
          onClick={handleChangeScence}
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
        <Popover
          style={styles.scene3.nextScene.styles}
          label={styles.scene3.nextScene.label}
          onClick={handleChangeScence}
        />
      </>
    )}
  </>
)

export default LofiDesk
