import { Grid } from '@material-ui/core'
import React from 'react'
import InfoCard from '../InfoCard'
import './MainDiv.css'
import Map from '../Map/Map'
import Graph from '../Graph'
import WorldStat from '../WorldStat/WorldStat'
import Symptoms from '../Symptoms/Symptoms'

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
            <Symptoms className="symptom_card"/>
            <div className="states_data">
                <h4>Top States</h4>
                <div className="state 1">
                    <p>Delhi</p>
                </div>
                <div className="state 2">
                <p>Delhi</p>
                </div>
                <div className="state 3">
                <p>Delhi</p>
                </div>
            </div>
        </div>
        </Grid>
        
    )
}

export default MainDIv
