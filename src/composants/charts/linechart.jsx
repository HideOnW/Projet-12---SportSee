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
import { USER_AVERAGE_SESSIONS } from "../../data/data";


function Linechart() {

    // const userSession = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === 12);
  
  
    const [data, setData] = useState(null);
  
      useEffect(() => {
          fetch("http://localhost:3001/user/12/average-sessions")
            .then((response) => response.json())
            .then((json) => setData(json.data))  // <-- store only the 'data' property
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
        right: 30,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="0 3" fill="red"/>
      <XAxis dataKey="day" tickSize={0}/>
      <YAxis dataKey="sessionLength"/>
      <Tooltip content="sessionLength" />
      <Legend />
      <Line name="sessionLength" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={1} dot={false} />
      
    </LineChart>
  ));
}

export default Linechart
