import React from 'react'
import Link from 'next/link'
import { setCurrentCity } from '../../src/actions/index'
import { City } from '../../interfaces'
import { store } from '../../pages/_app'

type Props = {
  data: City
}

const CityListItem = ({ data }: Props) => {

  const handleCityClick = () => {
    // set current city in store
    store.dispatch(setCurrentCity(data))
  }

  return (
    <Link href="/cities/[id]" as={`/cities/${data.id}`} shallow={true}>
      <a onClick={handleCityClick} style={{display: 'inline-block', width: '100%', padding: '.5rem'}}>
        {data.name}, {data.country}
      </a>
    </Link>
  )
}

export default CityListItem
