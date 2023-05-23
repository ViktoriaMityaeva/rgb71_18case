import React from 'react';
import styles from './Report.module.scss';
import { btnResults } from './data';
import Card from '../Card/Card';
import Table from '../Table/Table';

const Report = () => {

	return (
		<div className={styles.fullWin}>
			<div className={styles.headPage}>
				Отчеты
			</div>

			<div className={styles.cards}>
				{btnResults.map((dataBtn) =>
					<Card key={'lkjhgfd'} dataBtn={dataBtn} />
				)}
			</div>

			<div>
				<Table />
			</div>
		</div>
	);
};

export default Report;