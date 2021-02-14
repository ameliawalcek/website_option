import React from 'react'
import { Grid, Paper } from "@material-ui/core"
import '../Tools.css'

const Tool = ({ icon }) => {
    return (
        <Grid item xs={4} sm={3} md={2} lg={2}>
            <Paper className='paper' elevation={0}>
                <img src={icon} className='icon-img' />
            </Paper>
        </Grid>
    )
}

export default Tool
