import React from 'react';
import { RadialBarChart, RadialBar, PieChart, Pie, Cell} from 'recharts';
import { useEffect, useState } from 'react';

 
const Piechart = () => {

   const [data, setData] = useState(null);
  
      useEffect(() => {
          fetch("http://localhost:3001/user/12")
            .then((response) => response.json())
            .then((json)=>setData(json.data.todayScore))
            .catch((error) => console.error(error));
        }, []);

   

  if(!data){
    return (
      <p>Loading...</p>
    )
  }

  const percentage = data * 100; // Constant 20% filled
  const dataFill = [
  { name: "Filled", value: percentage },
  { name: "Remaining", value: 100 - percentage }
];


  const COLORS = ["#0088FE", "#E0E0E0"]; 
    return (
        <PieChart width={200} height={200}>
      <Pie 
        data={dataFill} 
        cx="50%" 
        cy="50%" 
        innerRadius={60} 
        outerRadius={80} 
        startAngle={90} 
        endAngle={-270} 
        dataKey="value"
      >
        {dataFill.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <text 
        x="50%" 
        y="50%" 
        dy={8} 
        textAnchor="middle" 
        fontSize={20} 
        fontWeight="bold"
        fill="#333"
      >
        {`${percentage}%`}
      </text>
    </PieChart>
    );
}
 
export default Piechart;