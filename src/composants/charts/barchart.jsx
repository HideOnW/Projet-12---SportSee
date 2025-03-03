import React from "react";
import datas from "../../data/data"
import {
    BarChart,
    Bar,
    Legend,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import { USER_ACTIVITY } from "../../data/data";
import { useEffect, useState } from 'react';



const Barchart = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/user/12/activity")
          .then((response) => response.json())
          .then((json) => {setData(json.data); console.log(json.data)})  // <-- store only the 'data' property
          .catch((error) => console.error(error));
      }, []);

      
        // const userActivity = USER_ACTIVITY.find((activity) => activity.userId === 12);
        return (
            // Only render the chart when 'data' is defined
            data && data.sessions && (
              <BarChart width={835} height={320} data={data.sessions}>
                <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" radius={[8, 8, 0, 0]} />
                <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[8, 8, 0, 0]} />
                
                <XAxis dataKey="name" />
                <Legend />
                <Tooltip />
                <YAxis orientation="right" />
              </BarChart>
            )
          );
          
};

export default Barchart;
