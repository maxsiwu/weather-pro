import { combineReducers } from 'redux'
import weather from './weather'
import cityList from './city-list'

export const rootReducer = combineReducers({
    weather,
    cityList
})

export type RootState = ReturnType<typeof rootReducer>