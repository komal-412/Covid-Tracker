import { Card, CardContent, IconButton } from '@material-ui/core'
import React from 'react'
import './Symptoms.css'
import logo from './symptoms.jpg' 
import { ArrowForwardRounded }from '@material-ui/icons'

function Symptoms() {
    return (
        <div className="symptoms">
            <Card >
                <CardContent className="symptoms__content">
                    <img src={logo} height="150px"/>
                    <h3>Symptoms &nbsp;
                    <IconButton>
                    <ArrowForwardRounded />
                    </IconButton>
                    </h3>
                    <p>
                        Read carefully symptoms of covid-19.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Symptoms
