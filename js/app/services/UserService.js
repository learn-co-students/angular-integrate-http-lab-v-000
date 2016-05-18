function UserService($http) {
	this.getUser = function () {
        return $http.get('http://0.0.0.0:8882/rest/user');
    };
	this.updateUser = function (first_name, last_name, email) {
      return $http.post('http://0.0.0.0:8882/rest/user', {"first_name":"Steven","last_name":"Jobscular","email":"billy@microsoft.com"});
  };
}

angular
	.module('app')
	.service('UserService', UserService);
