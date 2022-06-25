import Popover from "./Popover"


const styles = {
  scene1: {
    snow: {
      noiseName: 'snow',
      noiseValue: 'snowValue',
      label: 'Blizzard',
      styles: {
        left: '22%',
        top: '25%'
      }
    },
    fireplace: {
      noiseName: 'fireplace',
      noiseValue: 'fireplaceValue',
      label: 'Fireplace',
      styles: {
        left: '12%',
        top: '75%'
      }
    }
  },
  scene2: {
    snow: {
      noiseName: 'snow',
      noiseValue: 'snowValue',
      label: 'Blizzard',
      styles: {
        left: '22%',
        top: '25%'
      }
    },
  }
}

const NorthernLight = ({scene, handleActiveNoise}) => (
  <>
    {scene === "scene1" && (
      <>
        <Popover
          style={styles.scene1.snow.styles}
          label={styles.scene1.snow.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.snow.noiseValue,
              styles.scene1.snow.noiseName
            )
          }
        />
        <Popover
          style={styles.scene1.fireplace.styles}
          label={styles.scene1.fireplace.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene1.fireplace.noiseValue,
              styles.scene1.fireplace.noiseName
            )
          }
        />
      </>
    )}
    {scene === "scene2" && (
      <>
        <Popover
          style={styles.scene2.snow.styles}
          label={styles.scene2.snow.label}
          onClick={() =>
            handleActiveNoise(
              styles.scene2.snow.noiseValue,
              styles.scene2.snow.noiseName
            )
          }
        />
      </>
    )}
  </>
)

export default NorthernLight