import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { WeatherResponse } from "../../interfaces/weather-response";
import { WholeDayWeather } from "../../interfaces/whole-day-weather";
import { getFiveDayList } from "../utils/weather-utils";


const GET_CITY_WEATHER = 'GET_CITY_WEATHER';
const GET_CITY_WEATHER_ERROR = 'GET_CITY_WEATHER_ERROR';

export interface SetCityWeatherAction {
    type: typeof GET_CITY_WEATHER;
    dataList: WholeDayWeather[];
}

export interface SetCityWeatherErrorAction {
    type: typeof GET_CITY_WEATHER_ERROR;
}

export const setCityWeather = (dataList: WholeDayWeather[]): SetCityWeatherAction => ({
    type: GET_CITY_WEATHER,
    dataList
})

export const setCityWeatherError = (): SetCityWeatherErrorAction => ({
    type: GET_CITY_WEATHER_ERROR,
})


type ThunkResult = ThunkAction<void, {}, undefined, AnyAction>;

export const getCityWeather = (id: number): ThunkResult => dispatch => {
    axios.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then((response) => {
            // handle success
            const result = getFiveDayList(response.data.list);
            dispatch(setCityWeather(result));
        })
        .catch(() => {
            // handle error
            dispatch(setCityWeatherError())
        })
}


