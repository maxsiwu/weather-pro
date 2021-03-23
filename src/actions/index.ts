import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { City } from "../../interfaces"
import { WeatherResponse } from "../../interfaces/weather-response"
import { WholeDayWeather } from "../../interfaces/whole-day-weather"
import { getFiveDayList } from "../utils/weather-utils"


const GET_CITY_WEATHER = 'GET_CITY_WEATHER'
const GET_CITY_WEATHER_ERROR = 'GET_CITY_WEATHER_ERROR'
const GET_CITY_LIST = 'GET_CITY_LIST'
const GET_CITY_LIST_ERROR = 'GET_CITY_LIST_ERROR'

export interface SetCityWeatherAction {
    type: typeof GET_CITY_WEATHER
    dataList: WholeDayWeather[]
}

export interface SetCityWeatherErrorAction {
    type: typeof GET_CITY_WEATHER_ERROR
}

export interface SetCityListAction {
    type: typeof GET_CITY_LIST,
    cityList: City[]
}

export interface SetCityListErrorAction {
    type: typeof GET_CITY_LIST_ERROR
}

export const setCityWeather = (dataList: WholeDayWeather[]): SetCityWeatherAction => ({
    type: GET_CITY_WEATHER,
    dataList
})

export const setCityWeatherError = (): SetCityWeatherErrorAction => ({
    type: GET_CITY_WEATHER_ERROR,
})

export const setCityList = (cityList: City[]): SetCityListAction => ({
    type: GET_CITY_LIST,
    cityList
})

export const setCityListError = (): SetCityListErrorAction => ({
    type: GET_CITY_LIST_ERROR,
})

type ThunkResult = ThunkAction<void, {}, undefined, AnyAction>

export const getCityWeather = (id: number): ThunkResult => dispatch => {
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
