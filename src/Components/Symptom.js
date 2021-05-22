import React from 'react';
import './Symptom.css'
import Cards from './Cards'
import { CompareArrowsOutlined } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';



function Card(){
   
    return( 
    <>
    <div className="display">
        <div className="upperdisplay">
              <div className="info">
              <Fade top delay={1000}>
                  <h1>STAY HOME <br/> STAY SAFE</h1>
                  </Fade>
                  <p>
                  COVID-19 can spread like wildfire and cause mass infection if proper precautionary steps are not taken. 
                  Hence, we have to break the chain and restrain the community transmission of this virus. 
                  <br/>And the best way to that is by quarantining yourselves within your houses. 
                  We suggest that for your safety and your community security, staying at home is the best way to do your part at the moment.
                 </p>
              </div>
              <div className="gif">
                  <img  src="https://media.giphy.com/media/LLxW0TUxhzAfeby7T5/giphy.gif" className="image"/>
              </div>
        </div>
        <div className="cards">
            <Cards 
                src={"https://www.homeopathicremediesblog.com/wp-content/uploads/2016/09/Cough-and-Cold.jpg"} 
                heading={"COUGHING"}
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
</div>
</>
    )
}

export default Card
