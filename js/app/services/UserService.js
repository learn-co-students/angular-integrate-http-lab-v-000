function UserService($http) {
	this.getUser = funtion() {
		console.log($http.get('/rest/user'));
	}

	this.updateUser = funtion() {
		console.log($http.post('/rest/user', { status: success }));
	}
}

angular
	.module('app')
	.service('UserService', UserService);
