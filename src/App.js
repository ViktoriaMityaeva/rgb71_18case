import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import NoAccessRouter from './routes/NoAccessRouter';
import UserAccessRouter from './routes/UserAccessRouter';
import authState from './store/authState';

const App = observer(() => {
	const [isAuth, setIsAutorize] = useState(false);

	const { isAutorize } = authState;

	useEffect(() => {
		setIsAutorize(isAutorize);
	}, [isAutorize]);

	const routes = {
		true: <UserAccessRouter />,
		false: <NoAccessRouter />,
	};

	return routes[isAuth];
});

export default App;
