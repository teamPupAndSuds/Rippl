import AuthService from './AuthService.jsx';

export default class Api{
  constructor(){
  	this.AuthService = new AuthService('KEY', 'path')
  }

  isLoggedIn() {
  	return this.AuthService.loggedIn();
  }
  login(){
  	console.log('tes');
  	return this.AuthService.login();
  }
  logout(){
  	return this.AuthService.logout();
  }
}
//