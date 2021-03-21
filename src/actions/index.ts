import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { WeatherData } from "../../interfaces/weather-data";
import { WeatherResponse } from "../../interfaces/weather-response";


const GET_CITY_WEATHER = 'GET_CITY_WEATHER';
const GET_CITY_WEATHER_ERROR = 'GET_CITY_WEATHER_ERROR';

export interface SetCityWeatherAction {
    type: typeof GET_CITY_WEATHER;
    dataList: WeatherData[];
}

export interface SetCityWeatherErrorAction {
    type: typeof GET_CITY_WEATHER_ERROR;
}

export const setCityWeather = (dataList: WeatherData[]): SetCityWeatherAction => ({
    type: GET_CITY_WEATHER,
    dataList
})

export const setCityWeatherError = (): SetCityWeatherErrorAction => ({
    type: GET_CITY_WEATHER_ERROR,
})


type ThunkResult = ThunkAction<void, {}, undefined, AnyAction>;

export const getCityWeather = (city: string): ThunkResult => dispatch => {
    axios.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/forecast?q=Vancouver&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
        .then((response) => {
            // handle success
            console.log(response);
            dispatch(setCityWeather(response.data.list));
        })
        .catch((error) => {
            // handle error
            console.log(error);
            dispatch(setCityWeatherError())
        })
}


