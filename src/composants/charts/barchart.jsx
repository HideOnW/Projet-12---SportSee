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


const Barchart = () => {


	const userActivity = USER_ACTIVITY.find((activity) => activity.userId === 12);


	return (
		<BarChart width={830} height={320} data={userActivity.sessions}>
			<Bar dataKey="kilogram" name ="Poids (kg)" fill="#282D30" radius={[8, 8, 0, 0]}
/>
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" />

			<XAxis dataKey="name" />
            <Legend />
            <Tooltip />
			<YAxis orientation="right" />

		</BarChart>
	);
};

export default Barchart;
