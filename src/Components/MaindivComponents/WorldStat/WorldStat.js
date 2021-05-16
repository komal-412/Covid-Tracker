import React from 'react'
import './WorldStat.css'

function WorldStat({countries}) {
    return (
        <div  className="table">
            <div>
            {
                    countries.map((country) => (
                        <tr>
                            <td style={{color: "black", fontWeight: "600"}}>{country.country}</td>
                            <td style={{color: "grey", fontWeight: "400"}}>{country.active}</td>
                        </tr>
                    ))
                }
                
            </div>
        </div>
    )
}

export default WorldStat
