import React from 'react'
import Link from 'next/link'

import { City } from '../../interfaces'

type Props = {
  data: City
}

const ListItem = ({ data }: Props) => (
  <Link href="/cities/[id]" as={`/cities/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
