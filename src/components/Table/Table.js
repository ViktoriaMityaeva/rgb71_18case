import React from 'react';
import styles from './Table.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const CustomCell = ({ id, name, action = () => {} }) => {
	const viewReport = () => {
		const report = { id, name };
		action(0, report);
	};

	const analysisReport = () => {
		action(1);
	};

	const downloadReport = () => {
		action(2);
	};

	const deleteReport = () => {
		action(3);
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

const Table = ({ isCustomColumn, columns, rows, action = () => {} }) => {
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
				{isCustomColumn && <CustomCell id={id} name={name} action={action} />}
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