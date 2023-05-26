import React from 'react';
import styles from './Guide.module.scss';
import Card from '../Card/Card';
// import Table from '../Table/Table';
// import { columnsDoctors, rowsDoctors, columnsDepartment, rowsDepartment } from '../Report/data';

const Guide = () => {
	// const [isDoctor, setDoctor] = useState(true);

	const changeTable = (isValue) => {
		// setDoctor(isValue);
		console.log(isValue);
	};

	return (
		<div className={styles.fullWin}>
			<div>
				<div className={styles.headPage}>
					Справочники
				</div>

				<div className={styles.cards} style={{ justifyContent: 'start' }}>
					<Card dataBtn={{ text: 'МКБ-10'}} heightCard={30} action={() => changeTable(true)} />
					<Card dataBtn={{ text: 'МКБ-11'}} heightCard={30} action={() => changeTable(false)} />
					<Card dataBtn={{ text: 'Список услуг'}} heightCard={30} action={() => changeTable(false)} />
				</div>

				{/*{isDoctor*/}
				{/*	? <Table columns={columnsDoctors} rows={rowsDoctors} />*/}
				{/*	: <Table columns={columnsDepartment} rows={rowsDepartment} />*/}
				{/*}*/}
			</div>
		</div>
	);
};

export default Guide;