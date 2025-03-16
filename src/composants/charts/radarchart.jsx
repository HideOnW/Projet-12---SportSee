import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { fetchUserActivity, fetchUserPerformance } from "../../services/api"; 
import { useParams } from "react-router-dom";

const Radarchart = () => {
  const [userPerformance, setUserPerformance] = useState(null);
  const {id} = useParams();
 
   useEffect(() => {
     fetchUserPerformance(id)
       .then((data) => {
         setUserPerformance(data);
         console.log(data); 
       })
       .catch((error) => console.error(error));
   }, []);


  if (!userPerformance) {
    return <p>Loading...</p>;
  }


  const performanceData = userPerformance.data.map((item) => ({
    value: item.value,
    kind: userPerformance.kind[item.kind], // e.g. 1 → "cardio"
  }));
console.log(performanceData)
  return (
    <RadarChart
      margin={100}
      height={258}
      width={300}
      outerRadius="70%"
      data={performanceData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind"  />
      <PolarRadiusAxis tick={false} axisLine={false}/>
      <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default Radarchart;