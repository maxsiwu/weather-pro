export interface WeatherData {
    dt: number // timestamp in seconds
    main: {
        temp: number // kelvin if not specified in request
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number // percentage in 100
        temp_kf: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string // icons and conditions listed here https://openweathermap.org/weather-conditions
        }
    ]
    clouds: {
        all: number
    }
    wind: {
        speed: number //
        deg: number // kelvin if not specified
    }
    visibility: number // in meter if not specified
    pop: number // Probability of Precipitation, in 1
    rain: {
        '3h': number
    }
    sys: {
        pod: string
    }
    dt_txt: Date // date string in UTC
    date?: number // for sorting data in action, not returned from API
}
