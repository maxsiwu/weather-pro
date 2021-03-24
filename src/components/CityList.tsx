import { City } from '../../interfaces'
import React from 'react'
import CityListItem from './CityListItem'

type Props = {
  items: City[]
}

const CityList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <CityListItem data={item} />
      </li>
    ))}
    {items === [] && <li>No city found.</li>}
  </ul>
)

export default CityList
