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

import { USER_AVERAGE_SESSIONS } from "../../data/data";


function Linechart() {

    const userSession = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === 12);

  return (
    <LineChart
      width={258}
      height={258}
      data={userSession.sessions}
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
  );
}

export default Linechart
