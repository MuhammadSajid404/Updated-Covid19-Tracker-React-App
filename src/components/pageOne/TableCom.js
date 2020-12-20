import React from 'react'
import {makeStyles} from '@material-ui/core'
import './TableCom.css'

const useStyles = makeStyles({
    TablebGcol: {
        backgroundColor: '#212121',        
    },
    TCol: {
        color: '#fafafa'
    },
    TBcol: {
        color: '#f5f5f5'
    },
    TBbody: {
        overflowY: 'auto'
    }
})

export const Countries = ({countries = []}) => {
    const classes = useStyles()
    return (
            <table aria-label="simple table" className='fixed_header'>
                <thead>
                    <tr>
                        <td text-align='left' className={classes.TCol}>Country</td>
                        <td text-align='left' className={classes.TCol}>Total Infected</td>
                    </tr>
                </thead>
                <tbody className={classes.TBbody}>
                    {countries.map((country, i) => {
                        return (
                      <tr>
                          <td key={i} className={classes.TBcol}>{country.country}</td>
                          <td className={classes.TBcol}>{country.cases}</td>
                      </tr>
                        );
                    })}
                </tbody>
            </table>
        )}
