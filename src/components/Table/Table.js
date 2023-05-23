import React from 'react';
import Box from '@mui/material/Box';
import styles from './Table.module.scss';
import { v4 as uuidv4 } from 'uuid';


const columns = [
	{ field: 'report_name', headerName: 'Отчет', flex: 1 },
	{ field: 'sum', headerName: 'Всего', flex: 1 },
	{ field: 'match', headerName: 'Соответствует', flex: 1 },
	{ field: 'extra', headerName: 'Доп. назначения', flex: 1 },
	{ field: 'part', headerName: 'Частично', flex: 1 },
];


const rows = [
	{
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		name: 'Отчет_23.05.23',
		data: {
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},

];

const Table = () => {
	const RowColumn = ({ name = '' }) => {
		return (
			<td className={styles.bodyBig}>
				<p>{name}</p>
				<div>
					кнопки
				</div>
			</td>
		);
	};

	return (
		<div>
			<Box className={styles.tableBox}>
				<table>
					<thead>
						<tr>
							{columns.map((column) => (
								<th key={uuidv4()} className={styles.headFont}>
									<p className={styles.bodyBig}>{column.headerName}</p>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => {
							const { name, /*sum, match, extra, part data*/ } = row;

							return (
								<tr
									key={uuidv4()}
									style={{
										height: 104,
										// backgroundColor: id === selectedRow && 'hsla(31, 100%, 60%, 40%)',
									}}
									// onDoubleClick={() => dataEventForMap(points, ship, id)}
									// onClick={() => dataEventForReport(report, id)}
								>
									<RowColumn name={name} />

									{/*{data.map((field) => {*/}
									{/*	return(*/}
									{/*		<td key={'kjhgfd'}>*/}
									{/*			{field}*/}

									{/*		</td>*/}
									{/*	);*/}

									{/*})}*/}

								</tr>
							);
						})}
					</tbody>
				</table>
			</Box>
		</div>
	);
};

export default Table;