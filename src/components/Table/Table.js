import React, {useState} from 'react';
import styles from './Table.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Delete from '../../static/Delete';
import Download from '../../static/Download';
import ReactPaginate from 'react-paginate';

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

const Table = ({ isDownload = false, isDelete = false, rowsPerPage = 5, columns, rows, action = () => {} }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const pagesVisited = pageNumber * rowsPerPage;

	const handleClick = (idSelectedRow, reportName) => {
		const report = { idSelectedRow, reportName };

		action(0, report);
	};

	const createRowHeader = ({ headerName = '' }) => (
		<th key={uuidv4()}>
			<div>{headerName}</div>
		</th>
	);

	const createRow = (row = {}, index) => {
		const { id, data } = row;

		const dataRow = Object.values(data);

		if (index < pagesVisited || index >= pagesVisited + rowsPerPage) {
			return null;
		}

		return(
			<tr key={uuidv4()}>
				{dataRow.map((value) => (
					<td key={uuidv4()} onClick={() => handleClick(id, data.name)}>
						<div>{value}</div>
					</td>
				))}

				<CustomCell isDelete={isDelete} isDownload={isDownload}/>
			</tr>
		);
	};

	const pageCount = Math.ceil(rows.length / rowsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<div className={styles.page}>
			<table cellSpacing='0' className={styles.table}>
				<thead>
					<tr>{columns.map(createRowHeader)}</tr>
				</thead>
				<tbody>{rows.map(createRow)}</tbody>
			</table>

			<ReactPaginate
				previousLabel={'Назад'}
				nextLabel={'Далее'}
				pageCount={pageCount}
				onPageChange={changePage}
				pageClassName={styles.pageItem}
				containerClassName={styles.paginationBtns}
				previousLinkClassName={styles.previousBtn}
				nextLinkClassName={styles.nextBtn}
				disabledClassName={styles.paginationDisabled}
				activeClassName={styles.paginationActive}
			/>
		</div>
	);
};

export default Table;