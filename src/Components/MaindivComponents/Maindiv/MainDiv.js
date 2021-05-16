import { FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import InfoCard from '../InfoCard'
import './MainDiv.css'
import Map from '../Map/Map'
import Graph from '../Graph'
import WorldStat from '../WorldStat/WorldStat'
import Symptoms from '../Symptoms/Symptoms'

function MainDIv() {
    const [countryInput, setCountryInput] = useState("worldwide");
    const [stats, setStats] = useState([]);
    const [countryInfo, setcountryInfo] = useState([]);
    const [countriesData, setcountriesData] = useState([]);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
            setcountryInfo(data);
        })
    }, []);
    
    useEffect(()=>{
        fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
            setcountriesData(data);
        });
    },[])

    const handleChange = e => {
        setCountryInput(e.target.value);
    }

    return (
        <Grid  className="maindiv">
            
            <div className="left_container">
            
                <FormControl>
                <p>
                    <strong style={{color:"#6236ff", fontWeight:"800", fontSize:"20px"}}>Covid-19 </strong>Affected Areas
                </p>
                    <Select value={countryInput} onChange={handleChange}>
                    <MenuItem value="worldwide" ><p>Worldwide</p></MenuItem>
                        {
                                countriesData.map((country) => (
                                    <MenuItem value={country.country}><p>{country.country}</p></MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
                <Grid container className="stat__card">
                <InfoCard className="infocard" title="Total Cases" cases={countryInfo.cases} clr='pink' />
                <InfoCard title="Active cases" cases={countryInfo.active} clr='orange' />
                <InfoCard title="Recovered Cases" cases={countryInfo.recovered} clr='green' />
                <InfoCard title="Total Deaths" cases={countryInfo.deaths} clr='blue' />
                </Grid>
                <div className="stat__container">
                <h3 style={{color: "#6236ff", padding: "20px 0 0 20px"}}>Active Cases</h3>
                <Grid className="stat__map">
                    <WorldStat  countries={countriesData} />
                    <Map />
                </Grid>
                </div>
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
