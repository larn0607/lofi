import { createSlice } from '@reduxjs/toolkit'
import { SETS_BACKGROUND } from '../../constants/'

const initialState = {
  background: {
    set: 'book_cafe',
    scene: 'scene1',
    show: true,
    day: true,
    rainy: false,
    fire: false,
		snow: false,
    pixel: false,
    srcIn: SETS_BACKGROUND.find(
			item =>
				item.set === 'book_cafe' && item.scene === 'scene1' && item.day === true && item.rainy === false
		).src,
    srcOut: null
  },
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    changeBackground: (state, action) => {
      const condition = action.payload
      const newBg = {
        ...state.background,
        show: !state.background.show,
        ...condition,
      }
      console.log(newBg)
      const newSrc = SETS_BACKGROUND.find(item => 
        item.set === newBg.set &&
        item.scene === newBg.scene &&
        item.day === newBg.day &&
        item.rainy === newBg.rainy
      ).src
      state.background.show ? newBg.srcOut = newSrc : newBg.srcIn = newSrc
      state.background = {
        ...newBg
      }
    },
    changePixelBackground: (state, action) => {
      const condition = action.payload
      const newBg = {
        ...state.background,
        show: !state.background.show,
        ...condition,
      }
      const newSrc = SETS_BACKGROUND.find(item => 
        item.set === newBg.set &&
        item.scene === newBg.scene &&
        item.pixel === newBg.pixel
      ).src
      state.background.show ? newBg.srcOut = newSrc : newBg.srcIn = newSrc
      state.background = {
        ...newBg
      }
    },
  },
})

export const { changeBackground, changePixelBackground } = backgroundSlice.actions


export default backgroundSlice.reducer