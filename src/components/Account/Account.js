import React from 'react';
import styles from './Account.module.scss';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';

export default () => {

	const infoPerson = [
		{title: 'Имя пользователя', value: 'Иванов Иван Иванович'},
		{title: 'Почта', value: 'vanka@vstanka.pechka'},
		{title: 'Телефон', value: '76541230000'},
	];
	return (
		<div className={styles.fullWin}>
			<div className={styles.headPage}>
				Профиль
			</div>

			<div className={styles.cards}>
				<div className={styles.avatar}>
					<Avatar
						src='/broken-image.jpg'
						variant='square'
						style={{width: 150, height: 150, borderRadius: 44}}
					/>
				</div>
				<div className={styles.infoPerson}>
					{infoPerson.map(({title, value}) => {
						return (
							<div key={uuidv4()}>
								<div className={styles.firstInf}>{title}</div>
								<div className={styles.secondInf}>{value}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};