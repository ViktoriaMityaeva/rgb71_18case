import React from 'react';
import NavPanel from '../../components/NavPanel/NavPanel';
import Account from '../../components/Account/Account';

export default () => {
	return (
		<div>
			<NavPanel numBtn={0} isProfile={true}/>
			<Account/>
		</div>
	);
};
