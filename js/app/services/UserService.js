function UserService($http) {

	this.getUser = function () {
		return $http.get('http://0.0.0.0:8882/rest/user');
	};

	this.updateUser = function (userInput) {
		return $http.post('http://0.0.0.0:8882/rest/user', {userInput: userInput});
	};
}

angular
	.module('app')
	.service('UserService', UserService);
