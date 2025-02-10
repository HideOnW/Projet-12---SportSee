import React from 'react';
import { Radar, RadarChart, PolarGrid, 
	PolarAngleAxis, PolarRadiusAxis } from 'recharts';
  import { USER_PERFORMANCE } from "../../data/data";


const Radarchart = () => {

	// Sample data
	  const userPerformance = USER_PERFORMANCE.find(
		(performance) => performance.userId === 12
	  );
	
	
	  const performanceData = userPerformance.data.map(item => ({
		value: item.value,
		kind: userPerformance.kind[item.kind], // e.g., 1 → "cardio"
	  }));
  
  console.log(performanceData);

	return (
		<RadarChart margin={100} height={258} width={300} outerRadius="70%" data={performanceData} >
			<PolarGrid />
			<PolarAngleAxis dataKey="kind"/>
			<PolarRadiusAxis />
			<Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.5}/>
		</RadarChart>
	);
}

export default Radarchart;
