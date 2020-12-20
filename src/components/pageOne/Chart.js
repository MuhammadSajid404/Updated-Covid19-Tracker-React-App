import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../FetchDataFromApi'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  LineCont: { 
    backgroundColor: '#eeeeee',
    marginTop: '20px',
    height: '730px'
  }
})

export const Chart = ({
  data: { confirmed, recovered, deaths },
  country,
}) => {
    
    const classes = useStyles()
    const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

      const lineChart = dailyData.length ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
              {
                data: dailyData.map(({ confirmed }) => confirmed),
                label: "Infected",
                borderColor: "#ffad1f80",
                backgroundColor: "#ffad1f80",
                fill: true,
              },
              {
                data: dailyData.map(({ deaths }) => deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.5)",
                fill: true,
              },
            ],
          }}
        />
      ) : null;
    

      const doughnutChart = dailyData.length ? (
        <Doughnut
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                data: [confirmed.value, recovered.value, deaths.value],
                backgroundColor: [
                  "#ffad1f80",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: !country ? "Ratio in Global" :  `Ratio in ${country}` ,
            },
          }}
        />
      ) : null;

      const barChart = confirmed ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(255, 187, 0, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      ) : null;
      

    return (
        <Grid container className={classes.LineCont}>
        {country ? barChart : lineChart}
        {doughnutChart}
        </Grid>
    )
}
