import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class AuthState {
	demoUser = {
		email: 'admin',
		password: 'admin',
	};

	isAutorize = false;
	token =  '';
	role = JSON.parse(localStorage.getItem('AuthStore'))?.role ?? '';
	isSuperAdmin = JSON.parse(localStorage.getItem('AuthStore'))?.isSuperAdmin || false;

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ["token", "isAutorize", "role", "isSuperAdmin"],
			storage: window.localStorage,
		});
	}

	setAutorize = ( data ) => {
		this.token = data?.token;
		// this.isAutorize = !this.token === '';
		this.isAutorize = true;
		this.role = data?.role;
		this.isSuperAdmin = data?.isSuperAdmin;

	};

	setUserData = (user) => {
		this.user = user;
	};
	setLogOut = () => {
		this.token = '';
		this.role = '';
		this.isSuperAdmin = false;
		this.isAutorize = false;
		localStorage.setItem("Authorization", "");
	};
}

export default new AuthState();
