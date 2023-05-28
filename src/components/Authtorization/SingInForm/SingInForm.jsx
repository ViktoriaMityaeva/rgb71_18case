import React from 'react';
import { useFormik } from 'formik';
import { Formik, Form } from 'formik';
import styles from './SingInForm.module.scss';
import * as yup from 'yup';
import {styled, TextField} from '@mui/material';
import {apiAuthPost} from '../../../api/allApi';
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
		const linkAuth = 'http://ai-med-help.ru:8000/api/user/login/';

		apiAuthPost(linkAuth, values).then(({ data }) =>
			authState.setAutorize(data)
		);
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			postUser(values);
		},
	});
	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={formik.handleSubmit}
		>
			<Form className={styles.formikCard}>
				<div className={styles.textFieldCard}>
					<StyledTextField
						className={styles.textfieldStyle}
						variant='outlined'
						fullWidth
						placeholder='Логин'
						id='email'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						error={Boolean(formik.errors.email) && formik.touched.email}
						helperText={formik.touched.email && formik.errors.email}
					/>

					<StyledTextField
						className={styles.textfieldStyle}
						variant='outlined'
						fullWidth
						placeholder='Пароль'
						name='password'
						type={'password'}
						error={Boolean(formik.errors.password) && formik.touched.password}
						helperText={formik.touched.password && formik.errors.password}
						onChange={formik.handleChange}
					/>

				</div>
				<button className={styles.downAction} type='submit'>
					Войти
				</button>
			</Form>
		</Formik>
	);
};

export default SingInForm;