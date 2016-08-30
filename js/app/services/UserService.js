function UserService($http) {
  // http get request
  this.getUser = function() {
    var response = $http.get('http://0.0.0.0:8882/rest/user');
    return response
  };
}

angular
	.module('app')
	.service('UserService', UserService);