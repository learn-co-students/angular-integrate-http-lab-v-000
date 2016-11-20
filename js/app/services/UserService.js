function UserService($http) {
	this.getUser = function() {
		return $http({
			method: 'GET',
			url: 'http://0.0.0.0:8882/rest/user'
		});
	}

	this.updateUser = function() {
		return $http({
			method: 'POST',
			url: 'http://0.0.0.0:8882/rest/user'
		});
	}
}

angular
	.module('app')
	.service('UserService', UserService);
