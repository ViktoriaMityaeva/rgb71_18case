import React from 'react';
import {LineChart, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import { dataChart } from '../../Report/data';
import styles from './ChartLine.module.scss';

const ChartLine = () => {

	return (
		<div className={styles.chart}>
			<ResponsiveContainer>
				<LineChart data={dataChart}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name'/>
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='Зона 1' stroke='#0088FE' />
					<Line type='monotone' dataKey='Зона 2' stroke='#FFBB28' />
					<Line type='monotone' dataKey='Зона 3' stroke='#FF8042' />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
export default ChartLine;