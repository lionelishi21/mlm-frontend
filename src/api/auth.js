import axios from 'axios';

class Auth {

	/**
	 * [constructor description]
	 * @return {[type]} [description]
	 */
    constructor() {

        this.token = window.localStorage.getItem('token');
	    let userData = window.localStorage.getItem('user');
	    // this.user = userData ? JSON.parse(userData) : null;
	    if (this.token) {
	        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
	    }
    }

    /**
     * *********************************************************************************
     * [login description]
     * ********************************************************************************
     * @param  {[type]} token [description]
     * @param  {[type]} user  [description]
     * @return {[type]}       [description]
     */
    login (token, user) {

        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

       this.token = token;
       this.user = user;
       // Event.$emit('userLoggedIn');
    }

    /**
     * [check description]
     * @return {[type]} [description]
     */
    check () {
      return !! this.token;
    }
}

export default Auth;