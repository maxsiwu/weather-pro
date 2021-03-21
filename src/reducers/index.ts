import { combineReducers } from 'redux';
import weather from './weather';

export const rootReducer = combineReducers({
    weather,
})

export type RootState = ReturnType<typeof rootReducer>