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
  return (
    data && data.sessions && (
    <LineChart
      width={258}
      height={258}
      data={data.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      
      <CartesianGrid strokeDasharray="0 3" fill="red"/>
      <XAxis dataKey="day" />
      {/* <YAxis dataKey="sessionLenght"/> */}
      <Tooltip content="sessionLenght" />
      <Legend />
      <Line name="sessionLenght" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} />
      
    </LineChart>
  ));
}

export default Linechart
