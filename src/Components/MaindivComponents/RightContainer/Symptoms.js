import { IconButton } from '@material-ui/core'
import React from 'react'
import './Symptoms.css'
import logo from './symptoms.png' 
import { ArrowForwardRounded }from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Symptoms() {
    return (
                    <div  className="symptoms">
                        <img src={logo} height="150px" alt="symptom"/>
                        <h3 style={{color: "white", fontSize:"25px"}}>Symptoms &nbsp;
                        <Link to='/symptom'>
                        <IconButton style={{backgroundColor: "white", color:"#6263ff"}}>
                        <ArrowForwardRounded />
                        </IconButton>
                        </Link>
                        </h3>
                        <p>
                            Read carefully symptoms of covid-19.
                        </p>
                    </div>
    )
}

export default Symptoms
