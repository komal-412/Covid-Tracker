import React, {useRef, useEffect, Component} from 'react';
import './Symptom.css'
import Cards from './Cards'
import {TweenMax, Power3} from 'gsap'
import { CompareArrowsOutlined } from '@material-ui/icons';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';



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
    <>
        <div  ref={el => {logoItem = el}} className="cards">
    <div className="card">
    <div className="card_info">
        <img  src="https://www.homeopathicremediesblog.com/wp-content/uploads/2016/09/Cough-and-Cold.jpg" className="card_img"/>
            <h3 className="card_title">COUGHING</h3>
            <p className="card_explanation">Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain.</p>
        </div>
    </div>

    <div className="card">
    <div className="card_info">
        <img src="https://www.jmwvicary.co.uk/assets/images/Sore-throat.jpg"className="card_img"/>
            <h3 className="card_title">SORE THROAT</h3>
        </div>
    </div>

    <div className="card">
    <div className="card_info">
        <img src="https://post.greatist.com/wp-content/uploads/2018/07/man_with_fever-1200x628-facebook-1200x628.jpg" className="card_img"/>
            <h3 className="card_title">FEVER</h3>
        </div>
    </div>

    <div className="card">
    <div className="card_info">
        <img src="https://www.sboneinsurance.com/wp-content/uploads/2018/09/How-to-Effectively-and-Sensitively-Address-Employee-Mental-Health-Issues-e1537210937461.jpg" className="card_img"/>
            <h3 className="card_title">FATIGUE</h3>
        </div>
    </div>

    <div className="card">
    <div className="card_info">
        <img src="https://www.healthbanana.com/wp-content/uploads/2017/04/Help-Shortness-of-Breath-Quickly.jpg" className="card_img"/>
            <h3 className="card_title">SHORTHNESS OF BREATH</h3>
        </div>
    </div>

    <div className="card">
    <div className="card_info">
        <img src="https://i1.wp.com/www.bestherbalhealth.com/wp-content/uploads/2019/04/5-Major-Causes-of-Black-Phlegm.jpg?fit=750%2C445&ssl=1" className="card_img"/>
            <h3 className="card_title">LOTS OF PHLEGM</h3>
        </div>
    </div>
</div>
</>
    )
}

export default Card
