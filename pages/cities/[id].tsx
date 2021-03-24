import Layout from '../../src/components/Layout'
import React from 'react'
import CityListDetail from '../../src/components/CityListDetail'
import { RootState } from '../../src/reducers'
import { connect, ConnectedProps } from 'react-redux'
import { getCityById } from '../../src/actions/index'
import { useRouter } from 'next/router'
import { Spinner } from '../../src/components/shared/Spinner'

const mapStateToProps = (state: RootState) => {
  const { currentCity } = state

  return { city: currentCity.city, loadingCity: currentCity.isLoading, errors: currentCity.loadingError }
}

const connector = connect(mapStateToProps, { getCityById })

type Props = ConnectedProps<typeof connector>

const StaticPropsDetailTempate = ({ city, loadingCity, errors, getCityById }: Props) => {
  const { id } = useRouter().query

    if(!city && id) {
      // call api with id
      getCityById(id as string)
    }

  if (errors) {
    return (
      <Layout>
        <p>
          <span style={{ color: 'red' }}>Error loading city weather data</span>
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      {city && <CityListDetail item={city} />}
      {loadingCity &&
        <Spinner />
      }
    </Layout>
  )
}

const StaticPropsDetail = connector(StaticPropsDetailTempate)

export default StaticPropsDetail
