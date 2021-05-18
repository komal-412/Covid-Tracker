import { FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import InfoCard from '../InfoCard'
import './MainDiv.css'
import Map from '../Map/Map'
import Graph from '../Graph'
import WorldStat from '../WorldStat/WorldStat'
import Symptoms from '../Symptoms/Symptoms'

function MainDIv() {
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
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
    
        console.log(casesType);
    
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
            setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
            setMapZoom(1);
            });
        };
    

    

    return (
        <Grid  className="maindiv">
            
            <div className="left_container">
            
                <FormControl>
                <p>
                    <strong style={{color:"#6236ff", fontWeight:"800", fontSize:"20px"}}>Covid-19 </strong>Affected Areas
                </p>
                    <Select value={country} onChange={onCountryChange}>
                    <MenuItem value="worldwide" ><p>Worldwide</p></MenuItem>
                    {
                        countries.map((country) => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
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
                    <WorldStat  countries={tableData} />
                    <Map 
                    countries={mapCountries}
                    center={mapCenter}
                    zoom={mapZoom}
                    />
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
