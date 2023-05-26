import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../pages/AccountPage/AccountPage';
import ReportPage from '../pages/ReportPage/ReportPage';
import StatisticPage from '../pages/StatisticPage/StatisticPage';
import GuidePage from '../pages/GuidePage/GuidePage';

export default () => {
	const { pathname } = window.location;
	return (
		<Routes>
			<Route path='/account' element={<AccountPage />} />
			<Route path='/report' element={<ReportPage />} />
			<Route path='/statistic' element={<StatisticPage />} />
			<Route path='/guide' element={<GuidePage />} />

			<Route
				path={pathname}
				element={<ReportPage />}
			/>
		</Routes>
	);
};