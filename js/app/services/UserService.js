function UserService($http) {
	this.getUser = function() {
		return $http.get('http://0.0.0.0:8882/rest/user')
	}

	this.updateUser = function(newUser) {
		return $http.post('http://0.0.0.0:8882/rest/user', {userName: newUser})
	}
}

angular
	.module('app')
	.service('UserService', UserService);