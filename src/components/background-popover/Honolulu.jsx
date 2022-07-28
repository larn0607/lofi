import Popover from './Popover'

const styles = {
  scene1: {
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Summer Storm',
      styles: {
        left: '40%',
        top: '27%'
      }
    },
    keyboard: {
      noiseName: 'keyboard',
      noiseValue: 'keyboardValue',
      label: 'Keyboard',
      styles: {
        left: '73%',
        top: '92%'
      }
    },
  },
  scene2: {
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Summer Storm',
      styles: {
        left: '40%',
        top: '27%'
      }
    },
    ocean: {
      noiseName: 'ocean',
      noiseValue: 'oceanValue',
      label: 'Ocean',
      styles: {
        left: '67%',
        top: '60%'
      }
    },
  }
}

const Honolulu = ({ scene, handleActiveNoise }) => (
    <>
      {scene === 'scene1' && (
        <>
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

export default Honolulu
