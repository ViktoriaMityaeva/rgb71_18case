import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class AuthState {
	demoUser = {
		email: 'admin',
		password: 'admin',
	};

	isAutorize = JSON.parse(localStorage.getItem('AuthStore'))?.isAutorize || false;
	token =  JSON.parse(localStorage.getItem('AuthStore'))?.token ?? '';

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ['isAutorize', 'token'],
			storage: window.localStorage,
		});
	}

	setAutorize = (isAutorize = false) => {
		this.token = '';
		this.isAutorize = isAutorize;
	};
	setToken = ( token = '' ) => {
		this.token = token;
		this.setAutorize(this.token === '' ? !!this.token : true);
	};
}

export default new AuthState();
