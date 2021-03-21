import { SetCityWeatherAction, SetCityWeatherErrorAction } from "../actions"
import { WeatherData } from "../models/weather-data"

interface WeatherState {
    isLoading: boolean;
    weatherDataList: WeatherData[];
    cityName: string;
    loadingError: boolean;
}

const initialState: WeatherState = {
    isLoading: true,
    weatherDataList: [],
    cityName: 'Vancouver',
    loadingError: false,
}

const weather = (state = initialState, action: SetCityWeatherAction | SetCityWeatherErrorAction) => {
    switch (action.type) {
        case 'GET_CITY_WEATHER':
            return {
                ...state,
                weatherDataList: action.dataList,
                isLoading: false,
                loadingError: false,
            }
        case 'GET_CITY_WEATHER_ERROR':
            return {
                ...state,
                weatherDataList: [],
                isLoading: false,
                loadingError: true,
            }
        default:
            return state
    }
}

export default weather