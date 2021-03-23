import React from 'react'
import Link from 'next/link'

import { City } from '../../interfaces'

type Props = {
  data: City
}

const ListItem = ({ data }: Props) => (
  <Link href="/cities/[id]" as={`/cities/${data.id}`}>
    <a style={{display: 'inline-block', width: '100%'}}>
      {data.name}, {data.country}
    </a>
  </Link>
)

export default ListItem
