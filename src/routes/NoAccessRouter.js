import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Redirect from '../helpers/Redirect';
import SignInPage from '../pages/SingInPage/SingInPage';

export default () => {
	const path = '/signin';

	return (
		<Routes>
			<Route path='/signin' element={<SignInPage />} />
			<Route path='*' element={<Redirect to={path} />} />
		</Routes>
	);
};
