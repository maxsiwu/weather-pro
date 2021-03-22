import { GetStaticProps } from 'next'
import Link from 'next/link'

import { City } from '../../interfaces'
import Layout from '../../src/components/Layout'
import React from 'react'
import CityList from '../../src/components/CityList'
import { sampleCityData } from '../../src/utils/sample-city-data'

type Props = {
  items: City[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="City Page">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /cities</p>
    <CityList items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: City[] = sampleCityData
  return { props: { items } }
}

export default WithStaticProps
