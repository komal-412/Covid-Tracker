import React from 'react';
import './Symptom.css'
import Cards from './Cards'
import Fade from 'react-reveal/Fade';
import homelogo from './house.png' ;



function Card(){
   
    return( 
    <>
    <div className="display">
        <div className="upperdisplay">
              <div className="info">
              <Fade top delay={1000}>
                  <img src={homelogo} className="homelogo"/>
                  <h1>STAY HOME STAY SAFE</h1>
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
                desc={"As compared to common cold, COVID-19 cold causes more diverse symptoms. It has a longer incubation period and cause a higher risk of severity and fatality"}
            />
            <Cards 
                src={"https://www.jmwvicary.co.uk/assets/images/Sore-throat.jpg"} 
                heading={"SORE THROAT"}
                desc={"In COVID cases, the virus enters the membranes associated with the nose and the throat, which can make them swell, leading to a sore throat."}
            />
            <Cards 
                src={"https://post.greatist.com/wp-content/uploads/2018/07/man_with_fever-1200x628-facebook-1200x628.jpg"} 
                heading={"FEVER"}
                desc={"When it does occur, fever usually happens in the first week of illness and tends to go quite quickly. However, some people with long-lasting symptoms (long COVID) have reported having recurring fever/chills."}
            />
            <Cards 
                src={"https://www.sboneinsurance.com/wp-content/uploads/2018/09/How-to-Effectively-and-Sensitively-Address-Employee-Mental-Health-Issues-e1537210937461.jpg"} 
                heading={"FATIGUE"}
                desc={"Fatigue in COVID-19 is not the same as normal feelings of being tired or sleepy. It’s a type of extreme tiredness or feeling ‘wiped out’ that persists despite resting or getting a good night's sleep."}
            />
            <Cards 
                src={"https://www.healthbanana.com/wp-content/uploads/2017/04/Help-Shortness-of-Breath-Quickly.jpg"} 
                heading={"SHORTHNESS OF BREATH"}
                desc={"Coughing and fever accompanied by shortness of breath is another confirmed sign of coronavirus infection. Persistent dry cough puts a lot of pressure on your respiratory tract, but that should not leave you gasping for air."}
            />
            <Cards 
                src={"https://i1.wp.com/www.bestherbalhealth.com/wp-content/uploads/2019/04/5-Major-Causes-of-Black-Phlegm.jpg?fit=750%2C445&ssl=1"} 
                heading={"LOTS OF PHLEGM"}
                desc={"Considering that COVID-19 irritates lung tissue, a wet cough brings up phlegm from the lower respiratory tract (the lungs and lower airways, as opposed to your nose and throat) into the mouth."}
            />
       </div>
</div>
</>
    )
}

export default Card
