import React from 'react';
import { RadialBarChart, RadialBar, PieChart, Pie, Cell} from 'recharts';
import { useEffect, useState } from 'react';
import { fetchUserMain } from "../../services/api"; 
import { useParams } from "react-router-dom";

 
const Piechart = () => {

   const [data, setData] = useState(null);
  
   const {id} = useParams();
  
  
   useEffect(() => {
      fetchUserMain(id)
        .then((data) => setData(data.todayScore))
              .catch((error) => console.error(error));
          }, []);

   

  if(!data){
    return (
      <p>Loading...</p>
    )
  }

  const percentage = data * 100; // Constant 20% filled
  const dataFill = [    
  { name: "Remaining", value: 100 - percentage },
  { name: "Filled", value: percentage }
];


  const COLORS = [ "#FFFFFF", "#FF0000"]; 
    return (
        <PieChart width={200} height={200}>
      <Pie 
        data={dataFill} 
        cx="50%" 
        cy="50%" 
        innerRadius={65} 
        outerRadius={80} 
        startAngle={90} 
        endAngle={-270} 
        cornerRadius={20}
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