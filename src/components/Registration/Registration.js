import styles from './Registration.module.scss';
import React from 'react';
import { useFormik } from 'formik';
import { Formik, Form } from 'formik';
import {apiAuthPost} from '../../api/allApi';
import connectsState from '../../store/connectsState';

function Registration() {
	const { linkRegister } = connectsState;
	const postUser = async (values) => {
		apiAuthPost(linkRegister, values).then(({ error }) => {
			if (!error) console.log('Успешно');
		});
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			role: '',
		},
		onSubmit: values => {
			const { password, confirmPassword } = values;

			if (password !== confirmPassword) {
				alert('Пароли не совпадают');
			} else {
				postUser(values);
			}
		},
	});

	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={formik.handleSubmit}
		>
			<Form className={styles.formikCard}>
				<div className={styles.textFieldCard}>
					<div>Имя</div>
					<input
						id='firstName'
						name='firstName'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>

					<div>Фамилия</div>
					<input
						id='lastName'
						name='lastName'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>

					<div>Email Address</div>
					<input
						id='email'
						name='email'
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<div>Пароль</div>
					<input
						id='password'
						name='password'
						type='password'
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<div>Повторите</div>
					<input
						id='confirmPassword'
						name='confirmPassword'
						type='confirmPassword'
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
					/>
					<p style={{ display: 'block' }}>
						Доступ
					</p>
					<select
						name="role"
						value={formik.values.color}
						onChange={formik.handleChange}
						style={{ display: 'block' }}
					>
						<option value="" label="Выберите доступ" />
						<option value="admin" label="глав врач" />
						<option value="user" label="методист" />
					</select>

					<button className={styles.downAction} type="submit">Зарегестрировать</button>
				</div>
			</Form>
		</Formik>
	);
}

export default Registration;