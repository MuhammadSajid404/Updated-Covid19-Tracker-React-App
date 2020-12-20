import React, { useEffect, useState } from 'react'
import { Appbar } from './components/pageOne/Appbar'
import { Cards } from './components/pageOne/Cards'
import { fetchData, fetchCountries } from './components/FetchDataFromApi'
import { Countries } from './components/pageOne/TableCom'
import SecApp from './components/pageOne/SecApp'

import covidimage from './images/covidimage.jpg'

import {Grid, Link, Typography} from '@material-ui/core'

function App() {
  const [dataA, setDataA] = useState({})
  const [countries, setCountries] = useState([])

    useEffect(() => {
      (async () => {
        const fetchAPI = await fetchCountries();
        setCountries(fetchAPI)
      })()
      }, []);

    useEffect(() => {

      (async () => {
        const fetchedData = await fetchData();
        setDataA(fetchedData)
        
      })()
    }, [])

  return (
    <>
    <Appbar />

    <Grid container 
    direction='row'
    justify='flex-end'>

      <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
        <Countries countries = {countries} />
          <Typography
            style={{ color: '#e0f2f1', marginTop: '15px', marginLeft: '15px'}}>Data Source From {''}
          <Link
            href="https://coronavirus-19-api.herokuapp.com/all"
            style={{ color: "#f1bb07" }}
            target="_blank"
            >
            herokuapp's
          </Link> {''}
            API
          </Typography>
      </Grid>

      <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
        <img
          style={{width: '100%', height: '35%', marginTop: '15px'}}
          src={covidimage} alt="COVID-19" />
        <SecApp />
        <Typography
          style={{ color: '#e0f2f1' }}>Data Source From {''}
        <Link
          href="https://covid19.mathdro.id/api"
          style={{ color: "#f1bb07" }}
          target="_blank"
          >
          mathdro's
        </Link> {''}
          API
        </Typography>
      </Grid>

      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <Cards data = {dataA} />
        <Typography
          style={{ color: '#e0f2f1', marginLeft: '15px'}}>Data Source From {''}
        <Link
          href="https://coronavirus-19-api.herokuapp.com/all"
          style={{ color: "#f1bb07" }}
          target="_blank"
          >
          herokuapp's
        </Link> {''}
          API
        </Typography>
      </Grid>

    </Grid>
    </>
  )
}

export default App;

