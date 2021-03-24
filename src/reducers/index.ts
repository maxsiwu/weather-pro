import { combineReducers } from 'redux'
import weather from './weather'
import cityList from './city-list'
import currentCity from './current-city'

export const rootReducer = combineReducers({
    weather,
    cityList,
    currentCity,
})

export type RootState = ReturnType<typeof rootReducer>