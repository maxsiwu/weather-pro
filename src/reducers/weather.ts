import { WholeDayWeather } from "../../interfaces/whole-day-weather"
import { SetCityWeatherAction, SetCityWeatherErrorAction, SetCityWeatherLoadingAction } from "../actions"

interface WeatherState {
    isLoading: boolean
    weatherDataList: WholeDayWeather[]
    cityName: string
    loadingError: boolean
}

const initialState: WeatherState = {
    isLoading: true,
    weatherDataList: [],
    cityName: '',
    loadingError: false,
}

const weather = (state = initialState, action: SetCityWeatherAction | SetCityWeatherErrorAction | SetCityWeatherLoadingAction) => {
    switch (action.type) {
        case 'SET_CITY_WEATHER':
            return {
                ...state,
                weatherDataList: action.dataList,
                isLoading: false,
                loadingError: false,
            }
        case 'SET_CITY_WEATHER_ERROR':
            return {
                ...state,
                weatherDataList: [],
                isLoading: false,
                loadingError: true,
            }
        case 'SET_CITY_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default weather