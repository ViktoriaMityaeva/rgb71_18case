import React, {useState} from 'react';
import styles from './Table.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const columns = [
	{ field: 'report_name', headerName: 'Отчет', flex: 1 },
	{ field: 'sum', headerName: 'Всего', flex: 1 },
	{ field: 'match', headerName: 'Соответствует', flex: 1 },
	{ field: 'extra', headerName: 'Доп. назначения', flex: 1 },
	{ field: 'part', headerName: 'Частично', flex: 1 },
];


const rows = [
	{
		id: 0,
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 1,
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 2,
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 3,
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},

];

const CustomCell = ({ id, name }) => {
	const [isViewReport, setViewReport] = useState(false);
	console.log(isViewReport);
	console.log(id);

	const viewReport = () => {
		console.log('viewReport');

		setViewReport(prevView => !prevView);
	};

	const analysisReport = () => {
		console.log('analysisReport');
	};

	const downloadReport = () => {
		console.log('downloadReport');
	};

	const deleteReport = () => {
		console.log('deleteReport');
	};

	return(
		<td className={styles.customCell}>
			<div className={styles.nameText}>{name}</div>
			<div>
				<Link className={styles.link} style={{color: '#069697'}} onClick={viewReport}>Просмотр</Link>
				<>·</>
				<Link className={styles.link} style={{color: '#17FB04'}} onClick={analysisReport}>Анализ</Link>
				<>·</>
				<Link className={styles.link} style={{color: '#FFA800'}} onClick={downloadReport}>Скачать</Link>
				<>·</>
				<Link className={styles.link} style={{color: '#ED0707'}} onClick={deleteReport}>Удалить</Link>
			</div>
		</td>
	);
};

const Table = () => {
	// const [selectedRow, setSelectedRow] = useState(null);
	//
	// const handleClick = (idSelectedRow) => {
	// 	setSelectedRow(idSelectedRow);
	// };

	const createRowHeader = ({ headerName = '' }) => (
		<th key={uuidv4()} className={styles.headFont}>
			<div>{headerName}</div>
		</th>
	);

	const createRow = (row = {}) => {
		const { id, name, data } = row;
	
		return(
			<tr key={uuidv4()}
				// style={{ height: 50, backgroundColor: row.id === selectedRow && 'hsla(31, 100%, 60%, 40%)',}}
				// onClick={(row.id) => handleClick()}
				style={{ height: 70 }}
			>
				<CustomCell id={id} name={name} />

				{Object.values(data).map(setTableData)}
			</tr>
		);
	};

	const setTableData = (value) => (
		<td key={uuidv4()} className={styles.tableText}>
			<div>{value}</div>
		</td>
	);

	return (
		<table cellSpacing='0' className={styles.table}>
			<thead>
				<tr>{columns.map(createRowHeader)}</tr>
			</thead>
			<tbody>{rows.map(createRow)}</tbody>
		</table>
	);
};

export default Table;