import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { City } from "../../interfaces"
import { WeatherResponse } from "../../interfaces/weather-response"
import { WholeDayWeather } from "../../interfaces/whole-day-weather"
import { getFiveDayList } from "../utils/weather-utils"


const SET_CITY_WEATHER = 'SET_CITY_WEATHER'
const SET_CITY_WEATHER_ERROR = 'SET_CITY_WEATHER_ERROR'
const SET_CITY_LOADING= 'SET_CITY_LOADING'
const SET_CITY_LIST = 'SET_CITY_LIST'
const SET_CITY_LIST_ERROR = 'SET_CITY_LIST_ERROR'
const SET_CITY_LIST_LOADING = 'SET_CITY_LIST_LOADING'
const SET_CURRENT_CITY = 'SET_CURRENT_CITY'
const SET_CURRENT_CITY_ERROR = 'SET_CURRENT_CITY_ERROR'
const SET_CURRENT_CITY_LOADING = 'SET_CURRENT_CITY_LOADING'

export interface SetCityWeatherAction {
    type: typeof SET_CITY_WEATHER
    dataList: WholeDayWeather[]
}

export interface SetCityWeatherErrorAction {
    type: typeof SET_CITY_WEATHER_ERROR
}

export interface SetCityWeatherLoadingAction {
    type: typeof SET_CITY_LOADING
    isLoading: boolean
}

export interface SetCityListAction {
    type: typeof SET_CITY_LIST
    cityList: City[]
}

export interface SetCityListErrorAction {
    type: typeof SET_CITY_LIST_ERROR
}

export interface SetCityListLoadingAction {
    type: typeof SET_CITY_LIST_LOADING,
    isLoading: boolean
}

export interface SetCurrentCityAction {
    type: typeof SET_CURRENT_CITY
    currentCity: City
}

export interface SetCurrentCityErrorAction {
    type: typeof SET_CURRENT_CITY_ERROR
}

export interface SetCurrentCityLoadingAction {
    type: typeof SET_CURRENT_CITY_LOADING,
    isLoading: boolean
}

export const setCityWeather = (dataList: WholeDayWeather[]): SetCityWeatherAction => ({
    type: SET_CITY_WEATHER,
    dataList
})

export const setCityWeatherError = (): SetCityWeatherErrorAction => ({
    type: SET_CITY_WEATHER_ERROR
})

export const setCityWeatherLoading = (isLoading: boolean) : SetCityWeatherLoadingAction => ({
    type: SET_CITY_LOADING,
    isLoading
})

export const setCityList = (cityList: City[]): SetCityListAction => ({
    type: SET_CITY_LIST,
    cityList
})

export const setCityListError = (): SetCityListErrorAction => ({
    type: SET_CITY_LIST_ERROR,
})

export const setCityListLoading = (isLoading: boolean) : SetCityListLoadingAction => ({
    type: SET_CITY_LIST_LOADING,
    isLoading
})

export const setCurrentCity = (currentCity: City): SetCurrentCityAction => ({
    type: SET_CURRENT_CITY,
    currentCity
})

export const setCurrentCityError = (): SetCurrentCityErrorAction => ({
    type: SET_CURRENT_CITY_ERROR
})

export const setCurrentCityLoading = (isLoading: boolean) : SetCurrentCityLoadingAction => ({
    type: SET_CURRENT_CITY_LOADING,
    isLoading
})

type ThunkResult = ThunkAction<void, {}, undefined, AnyAction>

export const getCityWeather = (id: number): ThunkResult => dispatch => {

    dispatch(setCityWeatherLoading(true))

    axios.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then((response) => {
            // handle success
            const result = getFiveDayList(response.data.list)
            dispatch(setCityWeather(result))
        })
        .catch(() => {
            // handle error
            dispatch(setCityWeatherError())
        })
}

export const getCityList = (city: string): ThunkResult => dispatch => {

    dispatch(setCityListLoading(true))

    axios.get<City[]>('/api/cities?city=' + city)
        .then((response) => {
            // handle success
            dispatch(setCityList(response.data))
        })
        .catch(() => {
            // handle error
            dispatch(setCityListError())
        })
}

export const getCityById = (id: string): ThunkResult => dispatch => {

    dispatch(setCurrentCityLoading(true))

    axios.get<City>('/api/city?id=' + id)
        .then((response) => {
            // handle success
            dispatch(setCurrentCity(response.data))
        })
        .catch(() => {
            // handle error
            dispatch(setCurrentCityError())
        })

}
