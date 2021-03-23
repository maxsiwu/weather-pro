import { City } from "../../interfaces"
import { SetCityListAction, SetCityListErrorAction } from "../actions"

interface CityState {
    isLoading: boolean
    data: City[]
    loadingError: boolean
}

const initialState: CityState = {
    isLoading: true,
    data: [],
    loadingError: false,
}

const cityList = (state = initialState, action: SetCityListAction | SetCityListErrorAction) => {
    switch (action.type) {
        case 'GET_CITY_LIST':
            return {
                ...state,
                data: action.cityList,
                isLoading: false,
                loadingError: false,
            }
        case 'GET_CITY_LIST_ERROR':
            return {
                ...state,
                data: [],
                isLoading: false,
                loadingError: true,
            }
        default:
            return state
    }
}

export default cityList