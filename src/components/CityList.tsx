import { City } from '../../interfaces'
import React from 'react'
import CityListItem from './CityListItem'
import { Box } from '@material-ui/core'

type Props = {
  items: City[]
}

const CityList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Box p={1}>
          <CityListItem data={item} />
        </Box>
      </li>
    ))}
    {items === [] && <li>No city found.</li>}
  </ul>
)

export default CityList
