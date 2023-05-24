import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Redirect from '../helpers/Redirect';
import SignInPage from '../pages/SingInPage/SingInPage';

export default () => {
	const path = '/';

	return (
		<Routes>
			<Route path='/' element={<SignInPage />} />
			<Route path='*' element={<Redirect to={path} />} />
		</Routes>
	);
};
