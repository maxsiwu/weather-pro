import { WeatherData } from "../../interfaces/weather-data"
import { WholeDayWeather } from "../../interfaces/whole-day-weather"

export const getFiveDayList = (weatherData: WeatherData[]): WholeDayWeather[] => {

    if (weatherData.length === 0){
        return []
    }
    const arrayWithDate = weatherData.map(wd => {
        return {
            ...wd,
            date: new Date(wd.dt*1000).getDate()
        }
    })
    
    // create a map with date as key
    const groupedMap = arrayWithDate.reduce(
        (entryMap, e) => entryMap.set(e.date, [...entryMap.get(e.date)||[], e]),
        new Map()
    )

    let simplifiedData: WholeDayWeather[] = []

    // push day data to empty array
    Array.from(groupedMap.keys()).forEach(key => {
        simplifiedData.push(getWholeDayData(groupedMap.get(key)))
    })

    // return an array with 5 data points
    if (simplifiedData.length > 5) {
        simplifiedData.shift()
    }

    return simplifiedData
}

const getWholeDayData = (arr: WeatherData[]) => {
    arr.sort(function (a, b) {
        return a.main.temp - b.main.temp
    })
    
    // find the max and min of the date, max wind speed, max feels like, max pop, description, icon
    const dataPointWithMaxTemp = arr[arr.length - 1]
    const dataPointWithMinTemp = arr[0]

    const result: WholeDayWeather = {
        date: new Date(dataPointWithMaxTemp.dt*1000),
        temp_max: dataPointWithMaxTemp.main.temp,
        temp_min: dataPointWithMinTemp.main.temp,
        feels_like: dataPointWithMaxTemp.main.feels_like,
        description: dataPointWithMaxTemp.weather[0].description,
        icon: dataPointWithMaxTemp.weather[0].icon,
        pop: dataPointWithMaxTemp.pop,
        wind_speed: dataPointWithMaxTemp.wind.speed
    }

    return result
    
}
