function UserService($http) {
	var endpoint = 'http://0.0.0.0:8882/rest/user';
		this.getUser = function(){
			return $http.get(endpoint);
		};

		this.updateUser = function() {
			return $http.post(endpoint);
		};
}

angular
	.module('app')
	.service('UserService', UserService);
