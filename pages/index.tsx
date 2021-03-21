import { Button, InputBase, Typography } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import { getCityWeather } from '../src/actions';
import Layout from '../src/components/Layout'
import { RootState } from '../src/reducers';
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootState) => {
  const { weather } = state;
  return weather;
}

const connector = connect(mapStateToProps, {getCityWeather});

type Props = ConnectedProps<typeof connector>;

const IndexPageTemplate = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { getCityWeather } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }
  const handleClick = () => {
    getCityWeather('');
  }
  return (
    <Layout title="Weather Pro Home">
      <Typography variant="h5">City Search</Typography>
      <br />
      <InputBase
        placeholder=" Search…"
        style={{ border: '1px solid black', padding: '.25rem' }}
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>
        Get Vancouver Weather
      </Button>
    </Layout>
  )
}

const IndexPage = connector(IndexPageTemplate)

export default IndexPage
