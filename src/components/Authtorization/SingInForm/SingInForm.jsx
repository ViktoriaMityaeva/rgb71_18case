import React from 'react';
import { useFormik } from 'formik';
import styles from './SingInForm.module.scss';
import * as yup from 'yup';
import {styled, TextField} from '@mui/material';
import {apiAuthPost} from '../../api/allApi';
import authState from '../../../store/authState';

const StyledTextField = styled(TextField)({

	'& .MuiInputLabel-shrink': {
		display: 'none',
	},
	'& .MuiOutlinedInput-root.Mui-focused': {
		'& legend ': {
			display: 'none',
		},
	},
	'& .MuiInputBase-root': {

		background: '#FFFFFF',
		color: 'black',

		fontFamily: 'Inter',
		fontWeight: 400,
	},
	'& .MuiInput-underline:after': {
		border: 'none',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		},
	},
});


const SingInForm = () => {

	const validationSchema = yup.object({
		password: yup
			.string('Введите пароль')
			.min(4, 'В пароле должно быть от символов')
			.required('Требуется пароль'),
	});

	const postUser = async (values) => {
		const linkAuth = '';
		apiAuthPost(linkAuth, values).then(({ data }) => authState.setToken(data.token));
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			postUser(values);
		},
	});
	return (
		<form
			className={styles.actionContainer}
			onSubmit={formik.handleSubmit}
		>
			<StyledTextField
				variant='outlined'
				fullWidth
				placeholder='Логин'
				id='username'
				name='username'
				value={formik.values.username}
				onChange={formik.handleChange}
				error={Boolean(formik.errors.username) && formik.touched.username}
				helperText={formik.touched.username && formik.errors.username}
			/>

			<StyledTextField
				variant='outlined'
				fullWidth
				placeholder='Пароль'
				name='password'
				type={'password'}
				error={Boolean(formik.errors.password) && formik.touched.password}
				helperText={formik.touched.password && formik.errors.password}
				onChange={formik.handleChange}
			/>

			<button className={styles.downAction} type='submit'>
				Войти
			</button>
		</form>
	);
};

export default SingInForm;