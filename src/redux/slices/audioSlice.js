import {
  createSlice
} from '@reduxjs/toolkit'

import {
  CHILL_MUSICS
} from '../../constants/'

const randomIndex = Math.floor(Math.random() * CHILL_MUSICS.length)
const currentSong = {
  list: CHILL_MUSICS,
  index: randomIndex,
  src: CHILL_MUSICS[randomIndex]
}

const initialState = {
  currentSong,
  volumeValue: 0.5,
  isPlaying: false
}

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      const currentSong = action.payload
      state.currentSong = {
        ...state.currentSong,
        ...currentSong
      }
    },
    changeVolume: (state, action) => {
      state.volumeValue = action.payload
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    }
  }
})

export const {
  setCurrentSong,
  changeVolume,
  setIsPlaying
} = audioSlice.actions

export default audioSlice.reducer