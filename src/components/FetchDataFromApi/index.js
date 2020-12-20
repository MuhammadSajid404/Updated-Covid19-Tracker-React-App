import axios from 'axios'

const url = 'https://coronavirus-19-api.herokuapp.com/all'
const URL = "https://covid19.mathdro.id/api"


export const fetchDataFromMathdro = async (country) => {
  let changeableUrl = URL;

  if (country) {
    changeableUrl = `${URL}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    return error;
  }
};

export const fetchCountriesFromMathdro = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};



export const fetchData = async () => {
  try {
      const {data : {cases, recovered, deaths}} = await axios.get(url)
      return { cases,
               recovered,
               deaths
            }
  }
      catch 
      (error) {
          return error
      }
  }

  export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

  
export const fetchCountries = async () => {
  try {
    const resp = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    return resp.data;

  } catch (error) {
    return error;
  }
};