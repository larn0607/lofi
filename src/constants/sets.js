import {
chillVibesThumb,
chillVibes1,
chillVibes2,
bookCafeThumb,
bookCafe1,
bookCafe2,
cafeThumb,
cafe1,
cafe2,
forestThumb,
forest1,
forest2,
lofiDeskThumb,
lofiDesk1,
lofiDesk2,
lofiDesk3,
northernLightThumb,
northernLight1,
northernLight2,
oceanThumb,
ocean1,
ocean2,
summerThumb,
summer1,
summer2,
vanThumb,
van1,
van2,
} from '../assets/images'

const SETS = [
  {
    set: 'summer',
    img: summerThumb,
    scenes: [
      {
        scene: 'scene1',
				img: summer1,
      },
      {
        scene: 'scene2',
				img: summer2,
      }
    ]
  },
  {
    set: 'van',
    img: vanThumb,
    scenes: [
      {
        scene: 'scene1',
				img: van1,
      },
      {
        scene: 'scene2',
				img: van2,
      }
    ]
  },
  {
    set: 'ocean',
    img: oceanThumb,
    scenes: [
      {
        scene: 'scene1',
				img: ocean1,
      },
      {
        scene: 'scene2',
				img: ocean2,
      }
    ]
  },
  {
    set: 'cafe',
    img: cafeThumb,
    scenes: [
      {
        scene: 'scene1',
				img: cafe1,
      },
      {
        scene: 'scene2',
				img: cafe2,
      }
    ]
  },
  {
    set: 'forest',
    img: forestThumb,
    scenes: [
      {
        scene: 'scene1',
				img: forest1,
      },
      {
        scene: 'scene2',
				img: forest2,
      }
    ]
  },
  {
    set: 'lofi_desk',
    img: lofiDeskThumb,
    scenes: [
      {
        scene: 'scene1',
				img: lofiDesk1,
      },
      {
        scene: 'scene2',
				img: lofiDesk2,
      },
      {
        scene: 'scene3',
				img: lofiDesk3,
      }
    ]
  },
  {
    set: 'northern_light',
    img: northernLightThumb,
    scenes: [
      {
        scene: 'scene1',
				img: northernLight1,
      },
      {
        scene: 'scene2',
				img: northernLight2,
      }
    ]
  },
  {
    set: 'chill_vibes',
    img: chillVibesThumb,
    scenes: [
      {
        scene: 'scene1',
				img: chillVibes1,
      },
      {
        scene: 'scene2',
				img: chillVibes2,
      }
    ]
  },
  {
    set: 'book_cafe',
    img: bookCafeThumb,
    scenes: [
      {
        scene: 'scene1',
				img: bookCafe1,
      },
      {
        scene: 'scene2',
				img: bookCafe2,
      }
    ]
  },
].reverse()

export default SETS