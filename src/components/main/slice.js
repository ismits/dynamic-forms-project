import { createSlice } from "@reduxjs/toolkit"

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    forms: [],
  },
  reducers: {
    updateForms: (state, action) => ({
			...state,
      forms: action.payload
    }),
  },
})

export const { updateForms } = mainSlice.actions

export default mainSlice.reducer