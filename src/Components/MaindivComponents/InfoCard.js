import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import Bounce from 'react-reveal/Bounce';

const style= makeStyles({
    container:{
        margin: "10px",
        borderRadius: '10px',
        display: 'flex',
        // boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.3)"
    },
    card: {
        textAlign: 'flex-start',
        width: "100%",
        height: "15vh",
        padding: "5px 0",
        margin: "10px"
    },
    title: {
        color: '#1A1053',
        fontSize: '15px',
        margin: '0',
        padding: '0'
    },
    pink:{
        color: "#F9345E"
    },
    blue: {
        color: "#6236FF"
    },
    orange:{
        color: "#FA6400"
    },
    green:{
        color: "1CB142"
    },
    icon : {
        margin: '10px',
        height: '50px',
        color: '#6236ff'
    }
});
function InfoCard({title, cases, clr}) {
    const classes=style();

    const orange = <p style={{color:"#FA6400", fontSize:"20px"}} >{cases}</p>;
const pink = <p style={{color:"#F9345E", fontSize:"20px"}} >{cases}</p>;
    const blue = <p style={{color:"#817C9B", fontSize:"20px"}} >{cases}</p>;
    const green = <p style={{color:"#1CB142", fontSize:"20px"}} >{cases}</p>;

    const getCases = () =>{
        switch(clr){
            case "pink": return pink;
            case "orange": return orange;
            case"blue": return blue;
            case "green" : return green;
            default : return blue;
        }
    }

    return (
        
        <Bounce top delay={1000}>
        <div>
            <Card className={classes.container} >
                <CardContent className={classes.card}>
                    <p className={classes.title}>{title}</p>
                    <p>{getCases()}</p>
                </CardContent>
                <BarChartRoundedIcon className={classes.icon}/>
            </Card>
        </div>
        </Bounce>
    )
}

export default InfoCard
