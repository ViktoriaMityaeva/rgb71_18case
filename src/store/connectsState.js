import { makeAutoObservable } from 'mobx';

class ConnectsState {

    //Аккаунт
    linkGetUser = '';

    //Авторизация
    linkLogin = '';
    linkLogout = '';
    linkRegister = '';


    constructor() {
        makeAutoObservable(this);
    }

    //Аккаунт
    setLinkGetUser = (url) => {
        this.linkGetUser = url;
    };

    //Авторизация
    setLinkLogin = (url) => {
        this.linkLogin = url;
    };
    setLinkLogout = (url) => {
        this.linkLogout = url;
    };
    setLinkRegister= (url) => {
        this.linkRegister = url;
    };

}

export default new ConnectsState();