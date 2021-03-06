import { Box, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getCityWeather } from '../../actions'
import { RootState } from '../../reducers'
import { getDayOfWeek } from '../../utils/date-utils'
import { Spinner } from '../shared/Spinner'
import styles from './Weather.module.scss'

const mapStateToProps = (state: RootState, props: {id?: number} ) => {
    const { weather } = state
    const { id } = props
    return { weather, id, isLoading: weather.isLoading }
}

const connector = connect(mapStateToProps, { getCityWeather })

type Props = ConnectedProps<typeof connector>

const WeatherTemplate = ({ id, weather, isLoading, getCityWeather }: Props) => {
    const { weatherDataList } = weather

    useEffect(()=> {
        if(id) {
            getCityWeather(id)
        }
    }, [id])

    return (
        <>
            {(isLoading || !id) && 
                <Spinner />
            }
            {!isLoading && weatherDataList.length > 0 &&
                <Box className={styles.weatherGrid}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography variant="h6">&nbsp;</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography className={styles.description}>&nbsp;</Typography>
                            <img src={`http://openweathermap.org/img/wn/10d@2x.png`} width="100%" alt="weather icon" style={{opacity: 0}}/>
                            <Typography variant="h6" className={styles.evenRow}>High</Typography>
                            <Typography className={styles.oddRow}>Feels like</Typography>
                            <Typography className={styles.evenRow}>Low</Typography>
                            <Typography className={styles.oddRow}>POP</Typography>
                            <Typography className={styles.evenRow}>Wind(km/h)</Typography>
                        </Grid>

                        {weatherDataList.map(w => {
                            return (
                                <Grid item xs={2} style={{textAlign: 'center'}} key={w.date.toString()}>
                                    <Box>
                                        <Typography variant="h6">{getDayOfWeek(w.date.getDay())}</Typography>
                                        <Typography>{`${(w.date.getMonth() + 1).toString().padStart(2, '0')}/${w.date.getDate().toString().padStart(2, '0')}`}</Typography>
                                        <Typography className={styles.description}>{w.description}</Typography>
                                        <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} width="100%" alt="weather icon" />
                                        <Typography variant="h6" className={styles.evenRow}>{w.temp_max.toFixed(1)}&#176;</Typography>
                                        <Typography className={styles.oddRow}>{w.feels_like.toFixed(1)}&#176;</Typography>
                                        <Typography className={styles.evenRow}>{w.temp_min.toFixed(1)}&#176;</Typography>
                                        <Typography className={styles.oddRow}>{(w.pop*100).toFixed(0)}%</Typography>
                                        <Typography className={styles.evenRow}>{w.wind_speed}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            }
        </>
    )
}

const Weather = connector(WeatherTemplate)

export default Weather