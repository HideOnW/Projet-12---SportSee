import React from 'react';
import { RadialBarChart, RadialBar, PieChart, Pie, Cell} from 'recharts';
 
const Piechart = () => {

    const percentage = 20; // Constant 20% filled
    const data = [
    { name: "Filled", value: percentage },
    { name: "Remaining", value: 100 - percentage }
  ];

  const COLORS = ["#0088FE", "#E0E0E0"]; 
    return (
        <PieChart width={200} height={200}>
      <Pie 
        data={data} 
        cx="50%" 
        cy="50%" 
        innerRadius={60} 
        outerRadius={80} 
        startAngle={90} 
        endAngle={-270} 
        dataKey="value"
      >
        {data.map((entry, index) => (
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