import React from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
import Guide from '../../components/Guide/Guide';

export default () => {
	return (
		<div>
			<NavPanel numBtn={3}/>

			<Guide />
		</div>
	);
};
