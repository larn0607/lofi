import Popover from './Popover'

const styles = {
  scene1: {
    fan: {
      noiseName: 'fan',
      noiseValue: 'fanValue',
      label: 'Fan',
      styles: {
        left: '60%',
        top: '45%'
      }
    },
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Summer Storm',
      styles: {
        left: '30%',
        top: '25%'
      }
    }
  },
  scene2: {
    summerStorm: {
      noiseName: 'summerStorm',
      noiseValue: 'summerStormValue',
      label: 'Summer Storm',
      styles: {
        left: '85%',
        top: '15%'
      }
    },
    waves: {
      noiseName: 'waves',
      noiseValue: 'wavesValue',
      label: 'Waves',
      styles: {
        left: '75%',
        top: '80%'
      }
    }
  }
}

const Summer = ({ scene, handleActiveNoise }) => {
  return (
    <>
      {scene === 'scene1' && (
        <>
          <Popover
            style={styles.scene1.fan.styles}
            label={styles.scene1.fan.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene1.fan.noiseValue,
                styles.scene1.fan.noiseName
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
            style={styles.scene2.waves.styles}
            label={styles.scene2.waves.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene2.waves.noiseValue,
                styles.scene2.waves.noiseName
              )
            }
          />
        </>
      )}
    </>
  )
}

export default Summer
