import React, {useEffect, useRef} from 'react'
import './Symptom.css'

    

function Cards({ src, heading, desc }) {

    return (
        
        <div className="card">
        <div className="card_info">
            <img  src={src} className="card_img"/>
                <h3 className="card_title">{heading}</h3>
                <p className="card_explanation">{desc}</p>
            </div>
    </div>

    )
}

export default Cards

// const Cards=[{
//     til:"COUGHING",
//     imgsrc:{logo},
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// {
//     til:"SORE THROAT",
//     imgsrc:"https://uploads.dailydot.com/2020/08/avengers-5.jpg?fm=pjpg&ixlib=php-3.3.0",
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// {
//     til:"SHORTHNESS OF BREATH",
//     imgsrc:"https://iwall365.com/iPhoneWallpaper/640x960/1310/Iron-Man-3-Robert-Downey-Jr_640x960_iPhone_4_wallpaper.jpg",
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// {
//     til:"LOTS OF PHLEGM",
//     imgsrc:"https://iwall365.com/iPhoneWallpaper/640x960/1310/Iron-Man-3-Robert-Downey-Jr_640x960_iPhone_4_wallpaper.jpg",
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// {
//     til:"FEVER",
//     imgsrc:"https://iwall365.com/iPhoneWallpaper/640x960/1310/Iron-Man-3-Robert-Downey-Jr_640x960_iPhone_4_wallpaper.jpg",
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// {
//     til:"FATIGUE",
//     imgsrc:"https://iwall365.com/iPhoneWallpaper/640x960/1310/Iron-Man-3-Robert-Downey-Jr_640x960_iPhone_4_wallpaper.jpg",
//     slink:"https://www.youtube.com/watch?v=FEf412bSPLs",
// },
// ];

