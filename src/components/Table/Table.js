import React, {useState} from 'react';
import styles from './Table.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Delete from '../../static/Delete';
import Download from '../../static/Download';

const CustomCell = ({ isDelete, isDownload }) => {
	const [isHoverDel, setIsHoverDel] = useState(false);
	const [isHoverDown, setIsHoverDown] = useState(false);

	const handleMouseEnterDel = () => {
		setIsHoverDel(true);
	};
	const handleMouseLeaveDel = () => {
		setIsHoverDel(false);
	};

	const handleMouseEnterDown = () => {
		setIsHoverDown(true);
	};
	const handleMouseLeaveDown = () => {
		setIsHoverDown(false);
	};

	const deleteReport = () => {
		// action(3);
		console.log('delete');
	};

	const downloadReport = () => {
		// action(2);
		console.log('downloadReport');
	};

	return(
		<td className={styles.customCell}>
			{isDelete &&
				<div
					style={{ marginRight: 10 }}
					onClick={deleteReport}
					onMouseEnter={handleMouseEnterDel}
					onMouseLeave={handleMouseLeaveDel}
				>
					<Delete color={isHoverDel ? '#FF0000' : '#bdbdbd'} />
				</div>
			}
			{isDownload &&
				<div
					onClick={downloadReport}
					onMouseEnter={handleMouseEnterDown}
					onMouseLeave={handleMouseLeaveDown}
				>
					<Download color={isHoverDown ? '#00693e' : '#bdbdbd'} />
				</div>
			}
		</td>
	);
};

const Table = ({ isDownload = false, isDelete = false, columns, rows, action = () => {} }) => {
	const handleClick = (idSelectedRow, reportName) => {
		const report = { idSelectedRow, reportName };

		action(0, report);
	};

	const createRowHeader = ({ headerName = '' }) => (
		<th key={uuidv4()} className={styles.headFont}>
			<div>{headerName}</div>
		</th>
	);

	const createRow = (row = {}) => {
		const { id, name, data } = row;

		let dataRow = Object.values(data);
		const dataFirst = dataRow.splice(0, 1);

		return(
			<tr key={uuidv4()} className={styles.row}>
				<td className={styles.nameText} onClick={() => handleClick(id, name)}>
					<div>{dataFirst}</div>
				</td>

				{dataRow.map((value) => (
					<td key={uuidv4()} className={styles.tableText} onClick={() => handleClick(id, name)}>
						<div>{value}</div>
					</td>
				))}

				<CustomCell isDelete={isDelete} isDownload={isDownload}/>

				{/*<td className={styles.customCell}>*/}
				{/*	{isDelete && <CustomCell isDelete={isDelete} />}*/}
				{/*</td>*/}

				{/*{isDownload && <CustomCellDownload />}*/}
			</tr>
		);
	};

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