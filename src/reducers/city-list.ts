import { City } from "../../interfaces"
import { SetCityListAction, SetCityListErrorAction, SetCityListLoadingAction } from "../actions"

interface CityListState {
    isLoading: boolean
    data: City[]
    loadingError: boolean
}

const initialState: CityListState = {
    isLoading: true,
    data: [],
    loadingError: false,
}

const cityList = (state = initialState, action: SetCityListAction | SetCityListErrorAction | SetCityListLoadingAction) => {
    switch (action.type) {
        case 'SET_CITY_LIST':
            return {
                ...state,
                data: action.cityList,
                isLoading: false,
                loadingError: false,
            }
        case 'SET_CITY_LIST_ERROR':
            return {
                ...state,
                data: [],
                isLoading: false,
                loadingError: true,
            }
        case 'SET_CITY_LIST_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default cityList