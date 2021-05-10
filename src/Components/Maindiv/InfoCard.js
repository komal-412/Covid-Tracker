import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';

const style= makeStyles({
    container:{
        margin: "10px",
        borderRadius: '10px',
        display: 'flex',
    },
    card: {
        textAlign: 'flex-start',
        width: "10vw",
        height: "12vh",
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

    const orange = <p style={{color:"#FA6400", fontSize:"28px"}} >{cases}</p>;
    const pink = <p style={{color:"#F9345E", fontSize:"28px"}} >{cases}</p>;
    const blue = <p style={{color:"#817C9B", fontSize:"28px"}} >{cases}</p>;
    const green = <p style={{color:"#1CB142", fontSize:"28px"}} >{cases}</p>;

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
        
        <div>
            <Card className={classes.container} >
                <CardContent className={classes.card}>
                    <p className={classes.title}>{title}</p>
                    <p>{getCases()}</p>
                </CardContent>
                <BarChartRoundedIcon className={classes.icon}/>
            </Card>
        </div>
    )
}

export default InfoCard
