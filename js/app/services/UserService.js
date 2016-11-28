function UserService($http) {
	let url = "http://0.0.0.0:8882/rest/user";
  this.getUser = function(){
		return $http.get(url);
	};

  this.updateUser = function(userInfo){
		return $http.post(url, userInfo);
	};

}

angular
	.module('app')
	.service('UserService', UserService);
