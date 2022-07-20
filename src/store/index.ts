import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airoportReducer from './slices/airoportSlice'

const rootReducer = combineReducers ( {
  airport: airoportReducer
})

export function setupStore() {
  return configureStore( {
    reducer: rootReducer
  })
}