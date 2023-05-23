import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class AuthState {
	demoUser = {
		email: 'testLogIn@testLogIn.com',
		password: 'testPassword',
	};
	
	isAutorize = JSON.parse(localStorage.getItem('AuthStore'))?.isAutorize || false;

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ['isAutorize'],
			storage: window.localStorage,
		});
	}

	setAutorize = (isAutorize = false) => {
		this.isAutorize = isAutorize;
	};
}

export default new AuthState();
