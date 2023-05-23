import React from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
import Report from '../../components/Report/Report';
// import styles from './ArchivePage.module.scss';

export default () => {
	return (
		<div>
			<NavPanel numBtn={1} isDownloadBtn={true}/>

			<Report />
		</div>
	);
};
