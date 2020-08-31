import { createStore } from 'redux'
import { weatherReducer } from './reducers/weather'

export const store = createStore(weatherReducer);