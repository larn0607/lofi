import { configureStore } from "@reduxjs/toolkit"

import backgroundSlice from "./slice/backgroundSlice"

const store = configureStore({
  reducer: {
    background: backgroundSlice,
  }
})

export default store