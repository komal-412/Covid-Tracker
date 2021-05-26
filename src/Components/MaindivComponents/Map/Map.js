import React from 'react'
import './Map.css'
import { CircleMarker, TileLayer, MapContainer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Grid } from '@material-ui/core';

function Map({ countries, center, zoom }) {
    return (
        <Grid container direction="column" className="map_div">            
            <MapContainer className="map"
                            center={center} zoom={1}>
                            <TileLayer 
                            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                            {
                                countries.map((country) => (
                                    <CircleMarker 
                                        center={[country.countryInfo.lat, country.countryInfo.long]} 
                                        fillOpacity={0.5} 
                                        stroke={false}
                                        radius={(country.cases/1000000)+3}
                                        fillColor={"red"}>
                                        <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                        <div className="info-container">
                                            <div className="info-name">
                                            <img alt="flag" src={`${country.countryInfo.flag}`} height="15px"/>
                                                &nbsp;&nbsp;{country.country}</div>
                                            <div className="info-confirmed">
                                                Cases: {country.cases}
                                            </div>
                                            <div className="info-recovered">
                                                Recovered: {country.recovered}
                                            </div>
                                            <div className="info-deaths">
                                                Deaths: {country.deaths}
                                            </div>
                                            </div>
                                        </Tooltip>
                                    </CircleMarker>
                                ))
                            }
                    </MapContainer>
        </Grid>
    )
}

export default Map
