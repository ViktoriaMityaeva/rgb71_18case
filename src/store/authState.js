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
		if (typeof data.token === "string" && data.token?.length) {
			this.token = data.token;
			this.isAutorize = true;
			this.role = data?.role;
			this.isSuperAdmin = data?.isSuperAdmin;
			localStorage.setItem("Authorization", `Token ${data.token}`);
		}
		console.log(typeof data.token === "string" && data.token?.length);
	};

	setUserData = (user) => {
		this.user = user;
	};
	setLogOut = () => {
		this.token = '';
		this.role = '';
		this.isSuperAdmin = false;
		this.isAutorize = false;
		localStorage.setItem("AuthStore", "");
	};
}

export default new AuthState();
