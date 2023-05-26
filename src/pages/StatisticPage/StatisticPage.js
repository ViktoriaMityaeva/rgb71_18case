import React from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
import Statistic from '../../components/Statistic/Statistic';

export default () => {
	return (
		<div>
			<NavPanel numBtn={2} isDownloadBtn={false}/>

			<Statistic />
		</div>
	);
};
