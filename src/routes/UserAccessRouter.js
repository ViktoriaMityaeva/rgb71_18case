import React from 'react';
import { /*Redirect,*/ Route, Routes } from 'react-router-dom';
import ReportPage from '../pages/ReportPage/ReportPage';
// import Signin from '../components/Auth/SinginIn/Singin';

export default () => {
	// const { pathname } = window.location;

	console.log('userAccess');

	return (
		<Routes>
			<Route path='/report' element={<ReportPage />} />

			{/*<Route path='/archive' component={ArchivePage} />*/}

			{/* Какой-то путь типа */}
			{/* <Route path='/signin' element={<SignInPage />} /> */}
			{/* <Route exact path={pathname}>
				<Redirect to={'/port'} />
			</Route> */}
		</Routes>
	);
};