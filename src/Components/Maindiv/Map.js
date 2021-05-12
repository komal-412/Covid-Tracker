import React from 'react'
import './Map.css'
import { CircleMarker, TileLayer, MapContainer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Grid } from '@material-ui/core';

function Stats() {
    return (
        <Grid container direction="column">
            <p><strong style={{color:"#6236ff", fontWeight:"800", fontSize:"20px"}}>Covid-19 </strong>Affected Areas</p>
            <MapContainer className="map"
                            style={{height:"40vh",width:"35vw", borderRadius:"10px"}}
                            zoom={1}
                            center={[-0.09, 51.505]}>
                            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <CircleMarker center={[51.505, -0.09]} fillOpacity={0.5} stroke={false}>
                                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                    <span>Tooltip</span>
                                </Tooltip>
                            </CircleMarker>
                    </MapContainer>
        </Grid>












        // <Grid container direction="column" style={{background}}>
        //     <Grid container direction="row">
        //         <p><strong style={{color:"#6236ff"}}>COVID - 19</strong> Affected Areas</p>
        //         <Grid container direction="row">
                
        //         <div className="map">
        //            <Grid container direction="column">
        //                 
        //             </Grid>
                
        //         </div>
        //         <div className="table">
        //             <tr>
        //                 <td>Countries</td>
        //                 <td>Cases</td>
        //             </tr>
        //         </div>
                
        //     </Grid>
        //     </Grid>
        // </Grid>
    )
}

export default Stats
