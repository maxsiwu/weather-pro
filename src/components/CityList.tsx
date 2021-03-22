import { City } from '../../interfaces'
import React from 'react'
import CityListItem from './CityListItem'

type Props = {
  items: City[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <CityListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
