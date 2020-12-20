import { FormControl, makeStyles, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchCountriesFromMathdro } from '../FetchDataFromApi'

const useStyles = makeStyles({
    Fcontrol: {
        backgroundColor: '#f9fbe7',
        marginTop: '30px',
        marginLeft: '180px',
        width: '300px',
        display: 'flex',
        displayContent: 'center',
        borderRadius: '10px',
        boxShadow: '0 5px 10px #9e9e9e, 0 0 0 5px #616161',
    }
})

export const CountrySelector = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountriesFromMathdro());
    };

    fetchAPI();
  }, []);

    const classes = useStyles()

    return (
      <FormControl className={classes.Fcontrol}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}> 
        <option value="">Global</option>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
    )
}
