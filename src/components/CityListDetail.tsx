import { Box, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { City } from '../../interfaces'
import Weather from './Weather/Weather'

type CityListDetailProps = {
  item: Partial<City>
}


const CityListDetail = ({item: city}: CityListDetailProps) => (
  <div>
    <Link href="/">
      <a><i className="fas fa-arrow-left"></i> Back to search</a>
    </Link>
    {city &&
      <Box p={2} mb={3} style={{ textAlign: 'center' }}>
        <Typography color="primary" variant="h5">{city.name}, {city.country}</Typography>
      </Box>
    }
    <Weather id={city.id} />
  </div>
)

export default CityListDetail
