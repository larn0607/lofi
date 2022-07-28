import {
	bookCafeDayInRain,
	bookCafeDayIn,
	bookCafeDayOutRain,
	bookCafeDayOut,
	bookCafeNightInRain,
	bookCafeNightIn,
	bookCafeNightOutRain,
	bookCafeNightOut,
	cafeDayInRain,
	cafeDayIn,
	cafeDayOutRain,
	cafeDayOut,
	cafeNightInRain,
	cafeNightIn,
	cafeNightOutRain,
	cafeNightOut,
	chillVibesDayBedRain,
	chillVibesDayBed,
	chillVibesDayLivingRain,
	chillVibesDayLiving,
	chillVibesNightBedRain,
	chillVibesNightBed,
	chillVibesNightLivingRain,
	chillVibesNightLiving,
	forestInRain,
	forestIn,
	forestOutRain,
	forestOut,
	forestPixelRain,
	forestPixel,
	lofiDeskBeach,
	lofiDeskCity,
	lofiDeskSnow,
	lofiDeskSnow1,
	northernLightInSnow,
	northernLightIn,
	northernLightOutSnow,
	northernLightOut,
	oceanInRain,
	oceanIn,
	oceanOutRain,
	oceanOut,
	summerInRain,
	summerIn,
	summerOutRain,
	summerOut,
	summerPixelRain,
	summerPixel,
	vanOutFire,
	vanOut,
	vanRain,
	van,
	space,
	underwater,
	kyotoParkDay,
	kyotoParkNight,
	kyotoStreetDay,
	kyotoStreetNight,
	honoluluBalconyDay,
	honoluluBalconyNight,
	honoluluBalconyRainDay,
	honoluluBalconyRainNight,
	honoluluBeachDay,
	honoluluBeachNight,
	honoluluBeachRainDay,
	honoluluBeachRainNight,
} from '../assets/videos'

const SETS_BACKGROUND = [{
		set: 'summer',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		fire: false,
		snow: false,
		src: summerIn,
	},
	{
		set: 'summer',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		fire: false,
		snow: false,
		src: summerInRain,
	},
	{
		set: 'summer',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		fire: false,
		snow: false,
		src: summerOut,
	},
	{
		set: 'summer',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		fire: false,
		snow: false,
		src: summerOutRain,
	},
	{
		set: 'summer',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: true,
		fire: false,
		snow: false,
		src: summerPixel,
	},
	{
		set: 'summer',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: true,
		fire: false,
		snow: false,
		src: summerPixelRain,
	},
	{
		set: 'van',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		fire: false,
		snow: false,
		src: van,
	},
	{
		set: 'van',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		fire: false,
		snow: false,
		src: vanRain,
	},
	{
		set: 'van',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		fire: false,
		snow: false,
		src: vanOut,
	},
	{
		set: 'van',
		scene: 'scene2',
		day: true,
		rainy: false,
		fire: true,
		pixel: false,
		snow: false,
		src: vanOutFire,
	},
	{
		set: 'ocean',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: oceanIn,
	},
	{
		set: 'ocean',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: oceanInRain,
	},
	{
		set: 'ocean',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: oceanOut,
	},
	{
		set: 'ocean',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: oceanOutRain,
	},
	{
		set: 'cafe',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeDayOut,
	},
	{
		set: 'cafe',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeDayOutRain,
	},
	{
		set: 'cafe',
		scene: 'scene1',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeNightOut,
	},
	{
		set: 'cafe',
		scene: 'scene1',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeNightOutRain,
	},
	{
		set: 'cafe',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeDayIn,
	},
	{
		set: 'cafe',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeDayInRain,
	},
	{
		set: 'cafe',
		scene: 'scene2',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeNightIn,
	},
	{
		set: 'cafe',
		scene: 'scene2',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: cafeNightInRain,
	},
	{
		set: 'forest',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: forestIn,
	},
	{
		set: 'forest',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: forestInRain,
	},
	{
		set: 'forest',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: forestOut,
	},
	{
		set: 'forest',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: forestOutRain,
	},
	{
		set: 'forest',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: true,
		snow: false,
		fire: false,
		src: forestPixel,
	},
	{
		set: 'forest',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: true,
		snow: false,
		fire: false,
		src: forestPixelRain,
	},
	{
		set: 'lofi_desk',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: lofiDeskBeach,
	},
	{
		set: 'lofi_desk',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: lofiDeskCity,
	},
	{
		set: 'lofi_desk',
		scene: 'scene3',
		day: true,
		rainy: false,
		snow: false,
		pixel: false,
		fire: false,
		src: lofiDeskSnow,
	},
	{
		set: 'lofi_desk',
		scene: 'scene3',
		day: true,
		rainy: false,
		snow: true,
		pixel: false,
		fire: false,
		src: lofiDeskSnow1,
	},
	{
		set: 'northern_light',
		scene: 'scene1',
		day: true,
		rainy: false,
		snow: false,
		pixel: false,
		fire: false,
		src: northernLightIn,
	},
	{
		set: 'northern_light',
		scene: 'scene1',
		day: true,
		rainy: false,
		snow: true,
		pixel: false,
		fire: false,
		src: northernLightInSnow,
	},
	{
		set: 'northern_light',
		scene: 'scene2',
		day: true,
		rainy: false,
		snow: false,
		pixel: false,
		fire: false,
		src: northernLightOut,
	},
	{
		set: 'northern_light',
		scene: 'scene2',
		day: true,
		rainy: false,
		snow: true,
		pixel: false,
		fire: false,
		src: northernLightOutSnow,
	},
	{
		set: 'chill_vibes',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesDayBed,
	},
	{
		set: 'chill_vibes',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesDayBedRain,
	},
	{
		set: 'chill_vibes',
		scene: 'scene1',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesNightBed,
	},
	{
		set: 'chill_vibes',
		scene: 'scene1',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesNightBedRain,
	},
	{
		set: 'chill_vibes',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesDayLiving,
	},
	{
		set: 'chill_vibes',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesDayLivingRain,
	},
	{
		set: 'chill_vibes',
		scene: 'scene2',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesNightLiving,
	},
	{
		set: 'chill_vibes',
		scene: 'scene2',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: chillVibesNightLivingRain,
	},
	{
		set: 'book_cafe',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeDayOut,
	},
	{
		set: 'book_cafe',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeDayOutRain,
	},
	{
		set: 'book_cafe',
		scene: 'scene1',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeNightOut,
	},
	{
		set: 'book_cafe',
		scene: 'scene1',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeNightOutRain,
	},
	{
		set: 'book_cafe',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeDayIn,
	},
	{
		set: 'book_cafe',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeDayInRain,
	},
	{
		set: 'book_cafe',
		scene: 'scene2',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeNightIn,
	},
	{
		set: 'book_cafe',
		scene: 'scene2',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: bookCafeNightInRain,
	},
	{
		set: 'dreamin',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: space,
	},
	{
		set: 'dreamin',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: underwater,
	},
	{
		set: 'kyoto',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: kyotoStreetDay,
	},
	{
		set: 'kyoto',
		scene: 'scene1',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: kyotoStreetNight,
	},
	{
		set: 'kyoto',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: kyotoParkDay,
	},
	{
		set: 'kyoto',
		scene: 'scene2',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: kyotoParkNight,
	},
	{
		set: 'honolulu',
		scene: 'scene1',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBalconyDay,
	},
	{
		set: 'honolulu',
		scene: 'scene1',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBalconyNight,
	},
	{
		set: 'honolulu',
		scene: 'scene1',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBalconyRainDay,
	},
	{
		set: 'honolulu',
		scene: 'scene1',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBalconyRainNight,
	},
	{
		set: 'honolulu',
		scene: 'scene2',
		day: true,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBeachDay,
	},
	{
		set: 'honolulu',
		scene: 'scene2',
		day: false,
		rainy: false,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBeachNight,
	},
	{
		set: 'honolulu',
		scene: 'scene2',
		day: true,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBeachRainDay,
	},
	{
		set: 'honolulu',
		scene: 'scene2',
		day: false,
		rainy: true,
		pixel: false,
		snow: false,
		fire: false,
		src: honoluluBeachRainNight,
	},
]

export default SETS_BACKGROUND