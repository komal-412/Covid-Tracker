import React from 'react'
import './Map.css'
import { CircleMarker, TileLayer, MapContainer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Grid, MenuItem, Select } from '@material-ui/core';

function Map({ countries, center, zoom }) {
    return (
        <Grid container direction="column" className="map_div">            
            <MapContainer className="map"
                            center={center} zoom={zoom}>
                            <TileLayer 
                            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <CircleMarker center={[51.505, -0.09]} fillOpacity={0.5} stroke={false}>
                                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                    <span>Tooltip</span>
                                </Tooltip>
                            </CircleMarker>
                    </MapContainer>
        </Grid>
    )
}

export default Map
