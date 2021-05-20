import React, {useRef, useEffect} from 'react';
import './Symptom.css'
import Cards from './Cards'
import {TweenMax, Power3} from 'gsap'
import { CompareArrowsOutlined } from '@material-ui/icons';


function Card(){
    let logoItem = useRef(null);

    useEffect(() =>{
        console.log(logoItem);
        TweenMax.to(
            logoItem,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
            )
    }, [])


    console.log(logoItem);
    return(
        <div  ref={el => {logoItem = el}} className="cards">
            <Cards 
                src={"https://www.homeopathicremediesblog.com/wp-content/uploads/2016/09/Cough-and-Cold.jpg"} 
                heading={"Coughing"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
            <Cards 
                src={"https://www.jmwvicary.co.uk/assets/images/Sore-throat.jpg"} 
                heading={"SORE THROAT"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
            <Cards 
                src={"https://post.greatist.com/wp-content/uploads/2018/07/man_with_fever-1200x628-facebook-1200x628.jpg"} 
                heading={"FEVER"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
            <Cards 
                src={"https://www.sboneinsurance.com/wp-content/uploads/2018/09/How-to-Effectively-and-Sensitively-Address-Employee-Mental-Health-Issues-e1537210937461.jpg"} 
                heading={"FATIGUE"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
            <Cards 
                src={"https://www.healthbanana.com/wp-content/uploads/2017/04/Help-Shortness-of-Breath-Quickly.jpg"} 
                heading={"SHORTHNESS OF BREATH"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
            <Cards 
                src={"https://i1.wp.com/www.bestherbalhealth.com/wp-content/uploads/2019/04/5-Major-Causes-of-Black-Phlegm.jpg?fit=750%2C445&ssl=1"} 
                heading={"LOTS OF PHLEGM"}
                desc={"Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain."}
            />
</div>
    )
}

export default Card
