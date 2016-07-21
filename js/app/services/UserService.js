function UserService($http) {
	this.getUser = function() {
		return $http.get('http://0.0.0.0:8882/rest/user');
	};

	this.updateUser = function(first_name, last_name, email) {
		return $http.post('http://0.0.0.0:8882/rest/user', {first_name: first_name, last_name: last_name, email: email});
	}
}

angular
	.module('app')
	.service('UserService', UserService);
