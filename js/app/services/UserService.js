function UserService($http) {
  // http get request
  this.getUser = function() {
    var response = $http.get('http://0.0.0.0:8882/rest/user');
    return response
  };

  // http post request
  this.updateUser = function(data) {
    var response = $http.post('http://0.0.0.0:8882/rest/user', data);
    return response
  }
}

angular
	.module('app')
	.service('UserService', UserService);