import { Grid } from '@material-ui/core'
import React from 'react'
import InfoCard from './InfoCard'
import './MainDiv.css'
import Stats from './Stats'

function MainDIv() {
    return (
        <Grid container direction="column" className="maindiv">
            <Grid container direction="column" className="maindiv__left">
                {/* <p><strong>Covid-19 </strong> &nbsp; Global Trend</p> */}
                <div className="maindiv__left__cards">
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <InfoCard title="Total Confirmed" cases="12456" clr='pink' />
                        <InfoCard title="Active confirmed" cases="12456" clr='orange' />
                        <InfoCard title="Recovered" cases="12456" clr='green' />
                        <InfoCard title="Death" cases="12456" clr='blue' />
                    </Grid>
                </div>
                <Stats />
            </Grid>
            <div className="maindiv__right">

            </div>
        </Grid>
    )
}

export default MainDIv
