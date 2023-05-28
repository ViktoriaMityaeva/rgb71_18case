import React/*, {useEffect, useState}*/ from 'react';
import styles from './Account.module.scss';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';
// import {apiMainGet} from '../../api/allApi';
// import authState from '../../store/authState';

export default () => {

	const infoPerson = [
		{title: 'Имя пользователя', value: 'Иванов Иван Иванович'},
		{title: 'Почта', value: 'vanka@vstanka.pechka'},
		{title: 'Телефон', value: '76541230000'},
	];
	//
	// const [isLoad, setLoad] = useState(true);
	// const [userData, setUserData] = useState({});
	// const [avatar, setAvatar] = useState('');
	// const [isError, setError] = useState(false);

	// useEffect(() => {
	// 	const link = 'http://ai-med-help.ru:8000/api/user/me/';
	//
	// 	getUserData(link);
	// }, [isLoad]);
	//
	// const getUserData = (url) => {
	// 	apiMainGet(url).then(({ data }) =>{
	// 		authState.setUserData(data);

	// const { name, email, phone, image } = data;

	// setUserData({
	// 	'Имя': name,
	// 	'Email': email,
	// 	'Номер Телефона': phone,
	// });
	// setAvatar(image);
	// console.log(data);
	// setLoad(false);
	// setError(error.isError);
	// 	});
	// };
	// const defUserAvatar = () => {
	// 	return <Box className={styles.defUserAvatar}>{"Загрузка Аватара ..."}</Box>;
	// };
	return (
		<div className={styles.fullWin}>
			<div className={styles.headPage}>
				Профиль
			</div>

			<div className={styles.cards}>
				<div className={styles.avatar}>
					{/*<img width={"100%"} height={"auto"} src={avatar} alt="user avatar" />*/}
					<Avatar
						// src={avatar}
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