function UserService($http) {

  var url = 'http://0.0.0.0:8882/rest/user'

  this.getUser = function () {
    return $http.get(url);
  };

  this.updateUser = function (email) {
    return $http.post(url, {email: email});
  };
}

angular
	.module('app')
	.service('UserService', UserService);