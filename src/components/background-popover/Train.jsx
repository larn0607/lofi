import Popover from './Popover'

const styles = {
scene1: {
  windowRain: {
    noiseName: 'windowRain',
    noiseValue: 'windowRainValue',
    label: 'Window Rain',
    styles: {
      left: '25%',
      top: '27%'
    }
  },
  train: {
    noiseName: 'train',
    noiseValue: 'trainValue',
    label: 'Train',
    styles: {
      left: '64%',
      top: '68%'
    }
  },
  keyboard: {
    noiseName: 'keyboard',
    noiseValue: 'keyboardValue',
    label: 'Keyboard',
    styles: {
      left: '16%',
      top: '85%'
    }
  },
},
scene2: {
  windowRain: {
    noiseName: 'windowRain',
    noiseValue: 'windowRainValue',
    label: 'Window Rain',
    styles: {
      left: '25%',
      top: '27%'
    }
  },
  train: {
    noiseName: 'train',
    noiseValue: 'trainValue',
    label: 'Train',
    styles: {
      left: '64%',
      top: '68%'
    }
  },
  keyboard: {
    noiseName: 'keyboard',
    noiseValue: 'keyboardValue',
    label: 'Keyboard',
    styles: {
      left: '16%',
      top: '85%'
    }
  },
}
}

const Train = ({ scene, handleActiveNoise }) => (
  <>
        <Popover
          style={styles.scene1.windowRain.styles}
          label={styles.scene1.windowRain.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.windowRain.noiseValue,
              styles.scene1.windowRain.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.train.styles}
          label={styles.scene1.train.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.train.noiseValue,
              styles.scene1.train.noiseName
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
)

export default Train
