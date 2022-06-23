import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noises: {
    cityTrafficVolume: 0,
    rainCity: 0,
    fireplaceValue: 0,
    campfireValue: 0,
    forestNightValue: 0,
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
    keyboardValue: 0
  },
}

const noisesSlice = createSlice({
  name: 'noises',
  initialState,
  reducers: {
    changeNoiseVolume: (state, action) => {
      state.noises = {
        ...state.noises,
        ...action.payload
      }
    }
  }
})

export const { changeNoiseVolume } = noisesSlice.actions

export default noisesSlice.reducer