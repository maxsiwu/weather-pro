import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { City } from '../../interfaces'
import Weather from './Weather'

type ListDetailProps = {
  item: City
}

const ListDetail = ({ item: city }: ListDetailProps) => (
  <div>
    <Box p={2} mb={3}>
      <Typography color="primary" variant="h5" style={{textAlign: 'center'}}>Weather for {city.name},{city.country}(country)</Typography>
    </Box>
    <Weather id={city.id} />
  </div>
)

export default ListDetail
