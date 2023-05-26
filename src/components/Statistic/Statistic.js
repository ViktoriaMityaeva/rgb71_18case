import React, {useState} from 'react';
import styles from './Statistic.module.scss';
import Card from '../Card/Card';
import Table from '../Table/Table';
import { columnsDoctors, rowsDoctors, columnsDepartment, rowsDepartment } from '../Report/data';

const Statistic = () => {
	const [isDoctor, setDoctor] = useState(true);

	const changeTable = (isValue) => {
		setDoctor(isValue);
	};

	return (
		<div className={styles.fullWin}>
			<div>
				<div className={styles.headPage}>
					Статистика
				</div>

				<div className={styles.cards} style={{ justifyContent: 'start' }}>
					<Card
						dataBtn={{ text: 'Врачи'}}
						heightCard={30}
						colorBg={isDoctor ? '#E5EFFF' : '#F7F9FA'}
						action={() => changeTable(true)}
					/>
					<Card
						dataBtn={{ text: 'Отделения'}}
						heightCard={30}
						colorBg={!isDoctor ? '#E5EFFF' : '#F7F9FA'}
						action={() => changeTable(false)}
					/>
				</div>

				{isDoctor
					? <Table columns={columnsDoctors} rows={rowsDoctors} />
					: <Table columns={columnsDepartment} rows={rowsDepartment} />
				}
			</div>
		</div>
	);
};

export default Statistic;