import { City } from "../../interfaces"
import { SetCurrentCityAction, SetCurrentCityErrorAction, SetCurrentCityLoadingAction } from "../actions"

interface CityState {
    isLoading: boolean
    city?: City
    loadingError: boolean
}

const initialState: CityState = {
    isLoading: true,
    loadingError: false,
}

const currentCity = (state = initialState, action: SetCurrentCityAction | SetCurrentCityErrorAction | SetCurrentCityLoadingAction) => {
    switch (action.type) {
        case 'SET_CURRENT_CITY':
            return {
                ...state,
                city: action.currentCity,
                isLoading: false,
                loadingError: false,
            }
        case 'SET_CURRENT_CITY_ERROR':
            return {
                ...state,
                isLoading: false,
                loadingError: true,
            }
        case 'SET_CURRENT_CITY_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default currentCity