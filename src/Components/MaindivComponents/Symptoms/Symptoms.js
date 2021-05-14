import { IconButton } from '@material-ui/core'
import React from 'react'
import './Symptoms.css'
import logo from './symptoms.png' 
import { ArrowForwardRounded }from '@material-ui/icons'

function Symptoms() {
    return (
        <div className="card">
                    <div  className="symptoms">
                        <img src={logo} height="150px" alt="symptom"/>
                        <h3 style={{color: "white"}}>Symptoms &nbsp;
                        <IconButton style={{backgroundColor: "white", color:"#6263ff"}}>
                        <ArrowForwardRounded />
                        </IconButton>
                        </h3>
                        <p>
                            Read carefully symptoms of covid-19.
                        </p>
                    </div>
        </div>
    )
}

export default Symptoms
