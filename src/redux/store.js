import { configureStore } from "@reduxjs/toolkit"

import backgroundSlice from "./slices/backgroundSlice"
import audioSlice from "./slices/audioSlice"
import noisesSlice from "./slices/noisesSlice"

const store = configureStore({
  reducer: {
    background: backgroundSlice,
    audio: audioSlice,
    noises: noisesSlice,
  }
})

export default store