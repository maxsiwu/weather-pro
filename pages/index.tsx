import { Box, CircularProgress, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import Layout from '../src/components/Layout'
import { RootState } from '../src/reducers'
import { connect, ConnectedProps } from 'react-redux'
import CityList from '../src/components/CityList'
import { getCityList } from '../src/actions/index'

const mapStateToProps = (state: RootState) => {
  const { weather, cityList } = state
  const { data, isLoading } = cityList
  return { weather, data, isLoading}
}

const connector = connect(mapStateToProps, {getCityList})

type Props = ConnectedProps<typeof connector>

const IndexPageTemplate = ({data, isLoading, getCityList}: Props) => {
  const [searchInput, setSearchInput] = useState<string>('')

  /**
   * handle input change
   * @param event - ChangeEvent
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    setSearchInput(input)
    
    if(input.trim().length > 2){
      getCityList(input)
    }
  }

  return (
    <Layout>
      <Box maxWidth="800px" m='0 auto' p={2}>
        <Typography variant="h5" color="primary">Get 5-day weather forecast</Typography>
        <br />
        <Box position="relative">
          <TextField
            placeholder="City name"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
          />
          <Box position="absolute" top="2.5rem" width="100%" border="1px solid #EEE">
            {isLoading && searchInput.trim().length > 2 && 
              <Box display="flex" justifyContent="center" alignItems="middle" p={1}>
                <CircularProgress color="secondary" />
              </Box>
            }
            {!isLoading && data && searchInput.trim().length > 2 &&
              <CityList items={data}/>
            }
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

const IndexPage = connector(IndexPageTemplate)

export default IndexPage
