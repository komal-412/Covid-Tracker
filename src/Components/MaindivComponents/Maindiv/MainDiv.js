import { FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import InfoCard from '../InfoCard'
import './MainDiv.css'
import Map from '../Map/Map'
import Graph from '../Graph/Graph'
import WorldStat from '../WorldStat/WorldStat'
import Symptoms from '../RightContainer/Symptoms'
import numeral from "numeral"

function MainDIv() {
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
        }, []);
    
      useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                setCountries(countries);
                setMapCountries(data);
                setTableData(data);
                });
        };
    
        getCountriesData();
        }, []);
    
        const onCountryChange = async (e) => {
        const countryCode = e.target.value;
    
        const url =
            countryCode === "worldwide"
            ? "https://disease.sh/v3/covid-19/all"
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
            await fetch(url)
            .then((response) => response.json())
            .then((data) => {
            setInputCountry(countryCode);
            setCountryInfo(data);
            setMapCenter([`${data.countryInfo.lat}`, `${data.countryInfo.long}`]);
            setMapZoom(1);
            });
        };
    

    

    return (
        <Grid  className="maindiv">
            
            <div className="upper_container">
                <div>
                <FormControl style={{marginLeft: "35px", marginBottom: "10px"}}>
                <h2>Covid Tracker</h2>
                <p style={{fontSize:"20px"}}>
                    <strong style={{color:"#6236ff"}}>Covid-19  &nbsp;</strong>
                    <strong>Affected Areas &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    <Select className="select" value={country} onChange={onCountryChange}>
                    <MenuItem value="worldwide" ><p >Worldwide</p></MenuItem>
                    {
                        countries.map((country) => (
                        <MenuItem value={country.value} >{country.name}</MenuItem>
                        ))
                    }
                    </Select>
                    </p>
                </FormControl>
                
                <Grid container className="stat__card" >
                <InfoCard className="infocard" title="Total Cases" cases={numeral(countryInfo.cases).format("0,0")} clr='pink' />
                <InfoCard title="Active cases" cases={numeral(countryInfo.active).format("0,0")} clr='orange' />
                <InfoCard title="Recovered Cases" cases={numeral(countryInfo.recovered).format("0,0")} clr='green' />
                <InfoCard title="Total Deaths" cases={numeral(countryInfo.deaths).format("0,0")} clr='blue' />
                </Grid>
                </div>
                <Symptoms className="symptom_card"/>
            </div>
            <h2 style={{marginLeft: "50px"}}>Active Cases</h2>
                <Grid direction="row" className="stat__container">
                
                <Grid className="stat__map" style={{justifyContent: "space-between"}}>
                    <Grid>
                        <div className="map">
                        <Map 
                    countries={mapCountries}
                    center={mapCenter}
                    zoom={mapZoom}
                    />
                        </div>
                    <div className="bar_graph">
                    <Graph/>
                    </div>
                    
                    </Grid>
                </Grid>
                <WorldStat  countries={tableData} countryInfo={countryInfo} />
                </Grid>
        </Grid>
        
    )
}

export default MainDIv
