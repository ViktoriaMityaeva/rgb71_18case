import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import {dataChart} from '../../Report/data';
import styles from './ChartBar.module.scss';

const ChartBar = () => {
	return (
		<div className={styles.chart}>
			CHARTBAR
			<ResponsiveContainer>
				<BarChart data={dataChart} margin='5'>
					<CartesianGrid strokeDasharray='3 3'/>
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip
						contentStyle={{
							background: 'var(--bgTheme)',
							border: '0.5px solid var(--bgThemeBorder)',
							color: 'var(--bgThemeTitle)',
						}}
					/>
					<Legend />
					<Bar dataKey='Зона 1' stackId='a' fill='#CC6900' />
					<Bar dataKey='Зона 2' stackId='a' fill='#F07C00' />
					<Bar dataKey='Зона 3' stackId='a' fill='#FF992C' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
export default ChartBar;