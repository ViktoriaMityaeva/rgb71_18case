import React, {useState} from 'react';
import styles from './Report.module.scss';
import { btnResults, columns, rows } from './data';
import Card from '../Card/Card';
import Table from '../Table/Table';
import Chart from '../Charts/Chart';
import Arrow from '../../static/Arrow';
import { v4 as uuidv4 } from 'uuid';

const Report = () => {
	const [isView, setView] = useState(null);
	const [isTable, setTable] = useState(true);
	const [nameReport, setNameReport] = useState('');

	const changeView = (num, report) => {
		const { idSelectedRow, reportName } = report;
		setNameReport(reportName);
		setView(num);
		console.log(idSelectedRow);
	};

	const changeTable = (isValue) => {
		setTable(isValue);
	};

	const Reports = () => (
		<div>
			<div className={styles.headPage}>
				Отчеты
			</div>

			<div className={styles.cards} style={{ justifyContent: 'space-between' }}>
				{btnResults.map((dataBtn) =>
					<Card
						key={uuidv4()}
						dataBtn={dataBtn}
						heightCard={50}
						colorBg={'#F7F9FA'}
					/>
				)}
			</div>

			<Table
				isDelete={true}
				isDownload={true}
				columns={columns}
				rows={rows}
				action={(num, report) => changeView(num, report)}
			/>
		</div>
	);

	const OneReport = () => (
		<div>
			<div className={styles.headPage}>
				<div className={styles.iconBack} onClick={() => setView(null)}>
					<Arrow />
				</div>
				{nameReport}
			</div>

			<div className={styles.cards} style={{ justifyContent: 'start' }}>
				<Card
					dataBtn={{ text: 'Таблица'}}
					heightCard={30}
					colorBg={isTable ? '#E5EFFF' : '#F7F9FA'}
					action={() => changeTable(true)}
				/>
				<Card
					dataBtn={{ text: 'Дашборд'}}
					heightCard={30}
					colorBg={!isTable ? '#E5EFFF' : '#F7F9FA'}
					action={() => changeTable(false)}
				/>
			</div>

			{isTable
				? <Table columns={columns} rows={rows} />
				:
				<div className={styles.charts} >
					<div style={{width: '65%', marginRight: 30}}>
						<Chart typeChart={'line'} />
					</div>
					<div style={{width: '30%'}}>
						<Chart typeChart={'pie'} />
					</div>
				</div>
			}
		</div>
	);

	return (
		<div className={styles.fullWin}>
			{isView !== 0 ? <Reports /> : <OneReport />}
		</div>
	);
};

export default Report;