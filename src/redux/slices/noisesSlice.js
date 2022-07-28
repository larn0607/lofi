import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noisesValue: {
    cityTrafficValue: 0,
    rainCityValue: 0,
    fireplaceValue: 0,
    campfireValue: 0,
    forestSoundValue: 0,
    rainForestValue: 0,
    wavesValue: 0,
    fanValue: 0,
    summerStormValue: 0,
    riverValue: 0,
    birdsValue: 0,
    peopleTalkInsideValue: 0,
    windValue: 0,
    oceanValue: 0,
    snowValue: 0,
    keyboardValue: 0,
    underwaterValue: 0,
    spaceValue: 0
  },
  isNoising: {
    cityTraffic: false,
    rainCity: false,
    fireplace: false,
    campfire: false,
    forestSound: false,
    rainForest: false,
    waves: false,
    fan: false,
    summerStorm: false,
    river: false,
    birds: false,
    peopleTalkInside: false,
    wind: false,
    ocean: false,
    snow: false,
    keyboard: false,
    underwater: false,
    space: false
  }
}

const noisesSlice = createSlice({
  name: 'noises',
  initialState,
  reducers: {
    changeNoiseVolume: (state, action) => {
      state.noisesValue = {
        ...state.noisesValue,
        ...action.payload
      }
    },
    changeNoiseActive: (state, action) => {
      state.isNoising = {
        ...action.payload
      }
    },
    resetNoises: () => initialState
  }
})

export const { changeNoiseVolume, changeNoiseActive, resetNoises } = noisesSlice.actions

export default noisesSlice.reducer