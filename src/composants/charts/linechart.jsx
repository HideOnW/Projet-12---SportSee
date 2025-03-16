import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useEffect, useState } from 'react';
import { fetchUserSession } from "../../services/api"; 
import { useParams } from "react-router-dom";


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`+ "min"}</p>
      </div>
    );
  }

  return null;
};

function Linechart() {
  
    const [data, setData] = useState(null);
    const {id} = useParams();
  
      useEffect(() => {
          fetchUserSession(id)
            .then((data) => {
              setData(data);
              console.log(data); 
            })
            .catch((error) => console.error(error));
        }, []);
      

        if (!data) {
          return <p>Loading...</p>;
        }

        const nameDay = ['L','M','M','J','V','S','D']
      
      console.log(data)


      const averageData = data.sessions.map((item) => ({
          day: nameDay,
          sessionLength: item.sessionLength, // e.g. 1 → "cardio"
        }));

        console.log(averageData)


  return (
    data && data.sessions && (
    <LineChart
      width={258}
      height={258}
      data={averageData}
      margin={{
        top: 5,
        right: 20,
        left: 10,
        bottom: 5
      }}
      backgroundColor="red"
    >
      <CartesianGrid strokeDasharray="0 3" fill="red"/>
      <XAxis dataKey="day" tickSize={0} />
      <YAxis dataKey="sessionLength" orientation='right'hide padding={{bottom : 25}}  domain={['dataMin + 0', 'dataMax + 50']} />
      <Legend />
      <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
      <Tooltip content={<CustomTooltip />}/>
      <text 
        x="10%" 
        y="20%" 
        dy={4} 
        textAnchor="start" 
        fontSize={12} 
        fill="#FFFFFF"
        fillOpacity="0.5"
      >
        {"Durée moyenne des sessions"}
      </text>

      
    </LineChart>
  ));
}

export default Linechart
