import Popover from './Popover'

const styles = {
  scene1: {
    birds: {
      noiseName: 'birds',
      noiseValue: 'birdsValue',
      label: 'Birds chirping',
      styles: {
        left: '50%',
        top: '27%'
      }
    },
    cityTraffic: {
      noiseName: 'cityTraffic',
      noiseValue: 'cityTrafficValue',
      label: 'City Traffic',
      styles: {
        left: '30%',
        top: '30%'
      }
    },
  },
  scene2: {
    birds: {
      noiseName: 'birds',
      noiseValue: 'birdsValue',
      label: 'Birds chirping',
      styles: {
        left: '30%',
        top: '20%'
      }
    },
    river: {
      noiseName: 'river',
      noiseValue: 'riverValue',
      label: 'River',
      styles: {
        left: '50%',
        top: '70%'
      }
    }
  }
}

const Kyoto = ({ scene, handleActiveNoise }) => (
    <>
      {scene === 'scene1' && (
        <>
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
            style={styles.scene1.cityTraffic.styles}
            label={styles.scene1.cityTraffic.label}
            onClick={() =>
              handleActiveNoise(
                styles.scene1.cityTraffic.noiseValue,
                styles.scene1.cityTraffic.noiseName
              )
            }
          />
        </>
      )}
      {scene === 'scene2' && (
        <>
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

export default Kyoto
