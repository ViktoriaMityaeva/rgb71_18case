import React, {useEffect, useState} from 'react';
import styles from './Account.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {apiMainGet} from '../../api/allApi';
import authState from '../../store/authState';
import UserFields from './UserFields/UserFields';
import {Grid} from '@mui/material';

export default () => {

	const [isLoad, setLoad] = useState(true);
	const [userData, setUserData] = useState({});
	const [avatar, setAvatar] = useState('');

	useEffect(() => {
		const link = 'http://ai-med-help.ru:8000/api/user/me/';

		getUserData(link);
	}, [isLoad]);

	const getUserData = (url) => {
		apiMainGet(url).then(({ data }) => {
			authState.setUserData(data);

			const { photo } = data;
			const url = `http://ai-med-help.ru:8000/${photo}`;

			setUserData(data);
			setAvatar(url);

			setLoad(false);

		});
	};

	const userFields = (tempUserData = {}) => {
		const {first_name: name, last_name: lastName} = tempUserData;
		const infoPerson = [
			{title: 'Имя пользователя', value: name},
			{title: 'Фамилия пользователя', value: lastName},
		];

		return (

			<div>
				{infoPerson.map(({title, value}) => (
					<UserFields key={uuidv4()} title={title} value={value}/>
				))}
			</div>
		);
	};

	return (
		<div className={styles.fullWin}>
			<div className={styles.headPage}>
				Профиль
			</div>

			<Grid container>
				<Grid item xs={4} sm={4} md={4} lg={4} xl={4} className={styles.gridItem}>
					<img width={'100%'} height={'auto'} src={avatar} alt="user avatar" />
				</Grid>

				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					{userFields(userData)}
				</Grid>
			</Grid>
		</div>
	);
};