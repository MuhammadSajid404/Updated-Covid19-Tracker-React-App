import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    appbar: {
        minHeight: '10px',
        marginTop: '15px',
        backgroundColor: '#212121',
        color: '#f5f5f5',
        border: 1,
        borderRadius: '8px',
        borderColor: '#eeeeee'
    },
    hrl: {
        border: '10px solid #212121',
        borderRadius: '5px',
        marginTop: '0px'
    }
})

export const Appbar = () => {
    const classes = useStyles()
    return (
        <div>
            <hr className={classes.hrl}/>
            <AppBar position='static' className={classes.appbar}>
                <Toolbar variant='dense'>
                    <Typography variant='h5'>Coronavirus Tracker</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
