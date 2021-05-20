import React from 'react'
import './WorldStat.css'
import numeral from "numeral"

function WorldStat({countries}) {
    return (
        <div  className="table">
            <div>
            {
                    countries.map((country) => (
                        <tr>
                            <td style={{color: "black", fontWeight: "600"}}>{country.country}</td>
                            <td style={{color: "grey", fontWeight: "400"}}>{numeral(country.active).format("0,0")}</td>
                        </tr>
                    ))
                }
                
            </div>
        </div>
    )
}

export default WorldStat
