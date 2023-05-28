import React, { useEffect } from 'react';
import connectsState from '../../store/connectsState';

export default ({ children }) => {
	useEffect(() => {

		const serverPath = 'ai-med-help.ru:8000';


		const mainPath = `http://${serverPath}/api/`;


		// Авторизация и аккаунт
		connectsState.setLinkGetUser(`${mainPath}user/me/`);
		connectsState.setLinkLogout(`${mainPath}user/logout/`);
		connectsState.setLinkLogin(`${mainPath}user/login/`);
		connectsState.setLinkRegister(`${mainPath}user/register/`);

	}, []);

	return <>{children}</>;
};