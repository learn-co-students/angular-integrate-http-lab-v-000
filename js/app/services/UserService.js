function UserService($http) {
	this.getUser = function(){
		return $http.get('http://0.0.0.0:8882/rest/user');
	};

	this.updateUser = function(userInformation){
		return $http.post('http://0.0.0.0:8882/rest/user', userInformation);
	};
}

angular
	.module('app')
	.service('UserService', UserService);