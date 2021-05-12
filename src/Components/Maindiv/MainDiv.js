import { Card, CardContent, Grid } from '@material-ui/core'
import React from 'react'
import InfoCard from './InfoCard'
import './MainDiv.css'
import Map from './Map'
import Graph from './Graph'
import WorldStat from './WorldStat'
import Symptoms from './Symptoms'

function MainDIv() {
    return (
        <Grid  className="maindiv">
            <div className="left_container">
                <Grid container className="stat__card">
                <InfoCard className="infocard" title="Total Confirmed" cases="12456" clr='pink' />
                <InfoCard title="Active confirmed" cases="12456" clr='orange' />
                <InfoCard title="Recovered Cases" cases="12456" clr='green' />
                <InfoCard title="Total Deaths" cases="12456" clr='blue' />
                </Grid>
                <Grid className="stat__map">
                    <Map />
                    <WorldStat/>
                </Grid>
        </div>
        <div className="right_container">
            <Symptoms/>
            <Graph />
        </div>
        </Grid>
        
    )
}

export default MainDIv
