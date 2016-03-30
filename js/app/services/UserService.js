function UserService($http) {
	this.getUser = function(user) {
		return $http.get('http://0.0.0.0:8882/rest/user');
	}

	this.updateUser = function() {
		return $http.post('http://0.0.0.0:8882/rest/user');
	}
}

angular
	.module('app')
	.service('UserService', UserService);
