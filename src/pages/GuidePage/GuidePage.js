import React from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
// import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
// import styles from './ArchivePage.module.scss';

export default () => {
	return (
		<div>
			<NavPanel numBtn={3} isDownloadBtn={false}/>
			Справочники
		</div>
	);
};