import React from 'react';
import {LineChart, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import { dataChart } from '../../Report/data';
import styles from './ChartLine.module.scss';

const ChartLine = () => {
	// const CustomizedDot = ({ cx, cy }) => {
	// 	return (
	// 		<circle cx={cx} cy={cy} r={3} stroke='#FF992C' strokeWidth={1.5} fill='black'/>
	// 	);
	// };

	return (
		<div className={styles.chart}>
			<ResponsiveContainer>
				<LineChart
					data={dataChart}
					// width={730} height={250}
				// margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name'/>
					<YAxis />
					<Tooltip
					// contentStyle={{
					// 	background: 'var(--bgTheme)',
					// 	border: '0.5px solid var(--bgThemeBorder)',
					// 	color: 'var(--bgThemeTitle)',
					// }}
					/>
					<Legend />
					<Line type='monotone' dataKey='Зона 1' stroke='#CC6900' /*dot={ <CustomizedDot /> }*//>
					<Line type='monotone' dataKey='Зона 2' stroke='#F07C00' /*dot={ <CustomizedDot /> }*//>
					<Line type='monotone' dataKey='Зона 3' stroke='#FF992C' /*dot={ <CustomizedDot /> }*//>
				</LineChart>
			</ResponsiveContainer>

			{/*<LineChart*/}
			{/*	width={730} height={250} data={dataChart}*/}
			{/*	margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>*/}
			{/*	<CartesianGrid strokeDasharray="3 3" />*/}
			{/*	<XAxis dataKey="name" />*/}
			{/*	<YAxis />*/}
			{/*	<Tooltip />*/}
			{/*	<Legend />*/}
			{/*	<Line type="monotone" dataKey="Зона 1" stroke="#8884d8" />*/}
			{/*	<Line type="monotone" dataKey="Зона 2" stroke="#82ca9d" />*/}
			{/*</LineChart>*/}
		</div>
	);
};
export default ChartLine;