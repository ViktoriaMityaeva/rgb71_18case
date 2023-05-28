import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
// import { defaultUserData } from '../helpers/defaultObjects';

class AuthState {
	token = '';
	isAuthorize = false;
	role = '';
	isSuperAdmin = false;
	// user = { ...defaultUserData };

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ['isAuthorize', 'token', 'role', 'isSuperAdmin'],
			storage: window.localStorage,
		});
	}

	setAutorize = ( data ) => {
		const isAuthorize = !data;
		this.token = data?.token;
		this.isAutorize = !isAuthorize;
		this.role = data?.role;
		this.isSuperAdmin = data?.isSuperAdmin;

		this.setToken(data?.token);
		console.log(data.token);
	};

	setUserData = (user) => {
		this.user = user;
	};
	setToken = ( token = '' ) => {
		this.token = token;
		// console.log(this.token === '' ? !!this.token : true)
		// this.setAutorize(this.token === '' ? !!this.token : true);
	};


}

export default new AuthState();
