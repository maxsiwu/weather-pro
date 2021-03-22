export interface WholeDayWeather {
    date: Date;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    pop: number;
    wind_speed: number;
    description: string;
    icon: string;
}