import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import Countup from 'react-countup'

const useStyles = makeStyles({
    typoConf: {
      textAlign: 'center',
      color: '#eeeeee'
    },
    typoRecor: {
      textAlign: 'center',
      color: '#43a047'
    },
    typoDeath: {
      textAlign: 'center',
      color: '#d50000'
    },
    card: {
      margin: '15px',
      backgroundColor: '#212121'
    }
})

export const Cards = ({data : {cases, recovered, deaths}}) => {

    const classes = useStyles()
    if (!cases) {
      return 'Loading...'
    }
    
    return (
        <>
          <Card variant='outlined' className={classes.card}>
              <CardContent>
                <Typography 
                variant= 'h6'
                className={classes.typoConf}
                >Confirmed</Typography>
                <Typography
                variant='h2'
                style = {{
                  textAlign:'center',
                  color: '#fafafa'
                  }}>
                    <Countup start= {0} end= {cases} duration= {2.90} separator= ','/>
                </Typography>
              </CardContent>    
          </Card>

          <Card variant='outlined' className={classes.card}>
              <CardContent>
                <Typography 
                variant= 'h6'
                className={classes.typoRecor}
                >Recoverd</Typography>
                <Typography
                variant='h2'
                style = {{
                  textAlign:'center',
                  color: '#00e676'
                  }}>
                  <Countup start= {0} end= {recovered} duration= {2.90} separator= ','/>
                </Typography>
              </CardContent>    
          </Card>

          <Card variant='outlined' className={classes.card}>
              <CardContent>
                <Typography 
                variant= 'h6'
                className={classes.typoDeath}
                >Deaths</Typography>
                <Typography
                variant='h2'
                style = {{
                textAlign:'center',
                color: '#e53935'
                }}>
                  <Countup start= {0} end= {deaths} duration= {2.90} separator= ','/>
                </Typography>
              </CardContent>    
          </Card>
        </>
    )
}
