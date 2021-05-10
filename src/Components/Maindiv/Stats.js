import React from 'react'
import './Stats.css'
import { CircleMarker, TileLayer, MapContainer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Grid } from '@material-ui/core'


function Stats() {
    return (
        <div  className="map">
        <div className="map__container" style={{width:"70%"}}>
            <p><strong style={{color:"#6236ff"}}>COVID - 19</strong> Affected Areas</p>
                <br/>
            < Grid container direction="row">
                <MapContainer 
                    style={{height:"45vh", width:"100%", margin:"10px", borderRadius:"10px"}}
                    zoom={1}
                    center={[-0.09, 51.505]}
                >
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <CircleMarker center={[51.505, -0.09]} fillOpacity={0.5} stroke={false}>
                        <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                            <span>Tooltip</span>
                        </Tooltip>
                    </CircleMarker>
                </MapContainer>
            </Grid>
        </div>
            
        <div className="table" style={{width:"30%"}}>
            <tr>
                <td>Countries</td>
                <td>Cases</td>
            </tr>
        </div>
        </div>
    )
}

export default Stats
