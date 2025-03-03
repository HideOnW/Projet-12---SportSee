import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const Radarchart = () => {
  const [userPerformance, setUserPerformance] = useState(null);
 
  useEffect(() => {
    fetch('http://localhost:3001/user/12/performance')
      .then((res) => res.json())
      .then((json) => {
      
        setUserPerformance(json.data);
      })
      .catch((err) => console.error(err));
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
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default Radarchart;