// описываем состояние модели для аэропортов

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAiroport } from "../../models/models"

interface AiroportState {
  loading: boolean
  error: string
  airports: IAiroport[]
}

const initialState: AiroportState = {
  loading: false,
  error: '',
  airports: []
} 

export const airoportSlice = createSlice( {
  name: 'airport',
  initialState,
  reducers: {
    // описываем состояния
    // загрузка началась
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<IAiroport[]>) {
      state.loading = false
      state.airports = action.payload
    }, 
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default airoportSlice.reducer