import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { fetchUserActivity } from "../../services/api"; 
import { useParams } from "react-router-dom";


const Barchart = () => {
  const [activityData, setActivityData] = useState(null);
  const {id} = useParams();


  useEffect(() => {
    fetchUserActivity(id)
      .then((data) => {
        setActivityData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!activityData) {
    return <p>Loading…</p>;
  }


  const chartData = activityData.sessions.map((session, index) => ({
    ...session,
    index: index + 1,
  }));

  return (
    <BarChart width={835} height={320} data={chartData} barGap={10}>
      {/* Bars */}
      <Bar
        dataKey="kilogram"
        name="Poids (kg)"
        fill="#282D30"
        radius={[8, 8, 0, 0]}
        barSize={10}
      />
      <Bar
        dataKey="calories"
        name="Calories brûlées (kCal)"
        fill="#E60000"
        radius={[8, 8, 0, 0]}
        barSize={10}
      />

      {/* X axis: use "index" (our custom property) or "day" if you want real dates */}
      <XAxis dataKey="index" />
      <YAxis
        orientation="right"
        dataKey="kilogram"
        axisLine={false}
        tickSize={0}
        type="number"
        domain={["dataMin - 1", "dataMax + 1"]}
        
      />
      <YAxis
        orientation="left"
        dataKey="calories"
        axisLine={false}
        tickSize={0}
        type="number"
        domain={["dataMin - 1", "dataMax + 1"]}
      />
      <Tooltip />
      <Legend />
    </BarChart>
  );
};

export default Barchart;
