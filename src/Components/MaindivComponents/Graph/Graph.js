import React, {useState, useEffect} from 'react'
import './Graph.css'
import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);



function Crazy (){
    const genData = () => ({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            type: 'line',
            label: 'Active',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: ["103027363", "114179745", "128897696", "151399480", "166458217"]
          },
          {
            type: 'bar',
            label: 'Deaths',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: ["22360680", "25335460", "28162420", "31803600", "34502590"],
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Recovered',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: ["57079203", "64418462", "73119295", "88236951", "102755284"],
          },
        ],
      });
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Bar data={data} options={options} style={{width: "600px"}} />
    </>
  );
};

export default Crazy;