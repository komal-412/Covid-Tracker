import React  from 'react'
import './Symptom.css'
import Zoom from 'react-reveal/Zoom';
    

function Cards({ src, heading, desc }){
   

    return (
        <Zoom bottom>
        <div className="card">
        <div className="card_info">
            <img  src={src} className="card_img"/>
                <h3 className="card_title">{heading}</h3>
                <p className="card_explanation">{desc}</p>
            </div>
    </div>
    </Zoom>

    )
}

export default Cards

