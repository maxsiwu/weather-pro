import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { getCityWeather } from '../actions';
import { RootState } from '../reducers';
import { getDayOfWeek } from '../utils/date-utils';

const useStyles = makeStyles(() => ({
    evenRow: {
        padding: '.5rem',
    },
    oddRow: {
        padding: '.5rem',
        backgroundColor: '#EEE',
    }
}));

const mapStateToProps = (state: RootState, cityId: {id: number} ) => {
    const { weather } = state;
    const { id } = cityId;
    return { weather, id };
}

const connector = connect(mapStateToProps, { getCityWeather });

type Props = ConnectedProps<typeof connector>;

const WeatherTemplate = ({ id, weather, getCityWeather }: Props) => {
    const { weatherDataList } = weather;
    const classes = useStyles();

    useEffect(()=> {
        if(id) {
            getCityWeather(id);
        }
    }, [])

    return (
        <>
            {weatherDataList.length > 0 &&
                <Grid container style={{maxWidth: '800px', margin: '0 auto'}}>
                    <Grid item sm={2}>
                        <Typography variant="h6">&nbsp;</Typography>
                        <Typography>&nbsp;</Typography>
                        <Typography>&nbsp;</Typography>
                        <img src={`http://openweathermap.org/img/wn/10d@2x.png`} width="100%" alt="weather icon" style={{opacity: 0}}/>
                        <Typography variant="h6" className={classes.evenRow}>High</Typography>
                        <Typography className={classes.oddRow}>Feels like</Typography>
                        <Typography className={classes.evenRow}>Low</Typography>
                        <Typography className={classes.oddRow}>POP</Typography>
                        <Typography className={classes.evenRow}>Wind(km/h)</Typography>
                    </Grid>

                    {weatherDataList.map(w => {
                        return (
                            <Grid item sm={2} style={{textAlign: 'center'}}>
                                <Box>
                                    <Typography variant="h6">{getDayOfWeek(w.date.getDay())}</Typography>
                                    <Typography>{`${(w.date.getMonth() + 1).toString().padStart(2, '0')}/${w.date.getDate().toString().padStart(2, '0')}`}</Typography>
                                    <Typography style={{textTransform: 'capitalize'}}>{w.description}</Typography>
                                    <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} width="100%" alt="weather icon" />
                                    <Typography variant="h6" className={classes.evenRow}>{w.temp_max.toFixed(1)}</Typography>
                                    <Typography className={classes.oddRow}>{w.feels_like.toFixed(1)}</Typography>
                                    <Typography className={classes.evenRow}>{w.temp_min.toFixed(1)}</Typography>
                                    <Typography className={classes.oddRow}>{w.pop}</Typography>
                                    <Typography className={classes.evenRow}>{w.wind_speed}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            }
        </>
    )
}

const Weather = connector(WeatherTemplate)

export default Weather