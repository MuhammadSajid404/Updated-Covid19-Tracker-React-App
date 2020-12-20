import React, { Component } from 'react'
import { Chart } from './Chart'
import { CountrySelector } from './CountrySelector'
import { fetchDataFromMathdro } from '../FetchDataFromApi'
import { Grid } from '@material-ui/core'

class SecApp extends Component {
    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchData = await fetchDataFromMathdro()

        this.setState({data: fetchData})
    }

    handleCountryChange = async (country) => {
        const fetchData = await fetchDataFromMathdro(country)

        this.setState({data: fetchData, country: country})
    }
    render() {
        
        const { data, country } = this.state

        return (
            <Grid container>
                <Grid item>
                <CountrySelector handleCountryChange={this.handleCountryChange}/>              
                </Grid>
              <Grid item>
              <Chart data={data} country={country}/>
              </Grid>
            </Grid>
        )
    }
}

export default SecApp;