function UserService($http) {
	this.getUser = function() {
		// should make a GET request to /rest/user
		// and return the response from the API
		return $http.get('http://0.0.0.0:8882/rest/user');
	}

	this.updateUser = function(userData) {
		// should make a POST request to /rest/user
		// and return the response from the API
		return $http.post('http://0.0.0.0:8882/rest/user', userData);
	}
}

angular
	.module('app')
	.service('UserService', UserService);
