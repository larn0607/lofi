import Popover from './Popover'

const styles = {
  scene2: {
    underwater: {
      noiseName: 'underwater',
      noiseValue: 'underwaterValue',
      label: 'Underwater',
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
        left: '72%',
        top: '82%'
      }
    },
  },
  scene1: {
    space: {
      noiseName: 'space',
      noiseValue: 'spaceValue',
      label: 'Deepspace',
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
        left: '72%',
        top: '82%'
      }
    },
  }
}

const Dreamin = ({ scene, handleActiveNoise }) => (
    <>
      {scene === 'scene1' && (
        <>
          <Popover
            style={styles.scene1.space.styles}
            label={styles.scene1.space.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene1.space.noiseValue,
                styles.scene1.space.noiseName
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
            style={styles.scene2.underwater.styles}
            label={styles.scene2.underwater.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene2.underwater.noiseValue,
                styles.scene2.underwater.noiseName
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

export default Dreamin
