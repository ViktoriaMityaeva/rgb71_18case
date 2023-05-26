import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import NoAccessRouter from './routes/NoAccessRouter';
import UserAccessRouter from './routes/UserAccessRouter';
import authState from './store/authState';

const App = observer(() => {
	const [isAutorize, setIsAutorize] = useState(false);

	useEffect(() => {
		setIsAutorize(authState.isAutorize);
	}, [authState.isAutorize]);

	const routes = {
		true: <UserAccessRouter />,
		false: <NoAccessRouter />,
	};

	console.log(isAutorize);
	// return routes[isAutorize];
	return routes[true];


});

export default App;
