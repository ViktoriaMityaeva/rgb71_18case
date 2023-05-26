import React from 'react';
import ChartLine from '../Charts/ChartLine/ChartLine';
import ChartBar from '../Charts/ChartBar/ChartBar';
import ChartPie from '../Charts/ChartPie/ChartPie';
import styles from './Chart.module.scss';

const Chart = ({ typeChart }) => {
	const chart = {
		line: <ChartLine />,
		bar: <ChartBar />,
		pie: <ChartPie />,
		none: <p className={styles.noData}>Нет данных</p>
	};

	return(
		<div className={styles.parent}>
			{chart[typeChart || 'none']}
		</div>
	);
};
export default Chart;