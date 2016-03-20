function UserService($http) {

	this.getUser = function(){
		return $http.get('http://0.0.0.0:8882/rest/user')
		// .then(function(data) {
		// 	console.log(data);
		// });
	}

	this.updateUser = function(newUser){
		return $http.post('http://0.0.0.0:8882/rest/user', newUser)
	}

}

angular
	.module('app')
	.service('UserService', UserService);
